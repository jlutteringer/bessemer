'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { CardActionArea, CardMedia } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

const CharacterBuilderLandingPage = () => {
  const creationMethods = [
    {
      title: 'STANDARD',
      description: 'Create a character using a step-by-step approach.',
      beginnerOption: true,
      buttonLabel: 'Start Building',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
      action: 'SHOW HELP TEXT',
    },
    {
      title: 'PREMADE',
      description: 'Browse a selection of ready-to-play, premade characters and claim one to your account.',
      buttonLabel: 'Start Browsing',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'QUICK BUILD',
      description: 'Choose a species and class to quickly create a level 1 character.',
      buttonLabel: 'Start Building',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'RANDOM',
      description: 'Roll up a randomized character! You can optionally set some parameters such as level, species, and class.',
      buttonLabel: 'Start Building',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
  ]

  return (
    <div>
      {/* Page Header */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
          }}
        >
          CHARACTER CREATION METHOD
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.secondary',
          }}
        >
          Choose how you would like to create your character
        </Typography>
      </Box>

      {/* Card Grid */}
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: 'center',
        }}
      >
        {creationMethods.map((method, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Card
              sx={{
                width: '100%',
                maxWidth: '300px', // Fixed width
                height: '420px', // Fixed height
                display: 'flex',
                flexDirection: 'column',
                margin: '0 auto', // Center cards within grid
              }}
            >
              {/* Only the image and text are clickable; interactive controls can't be nested inside the action area's <button> */}
              <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={method.image}
                  alt={method.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                    }}
                  >
                    {method.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    {method.description}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  pt: 0,
                }}
              >
                <Box>
                  {/* Beginner Option */}
                  {method.beginnerOption && (
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Typography
                          variant="body2"
                          color="primary"
                        >
                          Beginner? {method.action}
                        </Typography>
                      }
                    />
                  )}
                </Box>

                <Box
                  sx={{
                    mt: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    endIcon={<span>&rarr;</span>}
                  >
                    {method.buttonLabel}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CharacterBuilderLandingPage
