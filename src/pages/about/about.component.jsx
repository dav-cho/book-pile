import { Typography } from '@material-ui/core';
import { useStyles } from './about.styles';

const About = () => {
  const { about, title } = useStyles();

  return (
    <div className={about}>
      <Typography className={title} variant="h4">
        About
      </Typography>
      <Typography variant="h5">
        Search for books that you're interested in...
      </Typography>
    </div>
  );
};

export default About;
