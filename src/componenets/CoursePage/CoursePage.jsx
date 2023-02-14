import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'ccsjcjsnscj',
      title: 'sample 1',
      description:
        '1 this is sample 1 video of this channnel hope you Like it.',
      video: {
        url: 's a a  s d h k  nb ',
      },
    },
    {
      _id: 'ccsjcjsnscj',
      title: 'sample 2',
      description:
        '2 this is sample 1 video of this channnel hope you Like it.',
      video: {
        url: 's a a  s d h k  nb ',
      },
    },
    {
      _id: 'ccsjcjsnscj',
      title: 'sample 3',
      description:
        '3 this is sample 1 video of this channnel hope you Like it.',
      video: {
        url: 's a a  s d h k  nb ',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />

        <Heading m="4" children={'description'} />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
