import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../redux/actions/course';
import { addToplaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />

        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />

      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />

      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addToPlaylistHandler = async courseId => {
    // console.log('added to play list', courseId);

    await dispatch(addToplaylist(courseId));
    dispatch(loadUser());
  };

  const categories = [
    'Web Development',
    'Artificial Intellence',
    'dsa',
    'oops',
    'java',
  ];
  const { loading, courses, error, message } = useSelector(
    state => state.course
  );

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: 'cleanError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'cleanMessage' });
    }
  }, [category, dispatch, keyword, error, message]);

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="search  a course"
        type={'text'}
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        padding={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses.length > 0 ? (
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading opacity={0.5} mt={4} children="No Course Found! " />
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
