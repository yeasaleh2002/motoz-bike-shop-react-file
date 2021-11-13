import {  Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';




     /* data details */
const itemData = [
    {
      img: 'https://www.banglamotor.net/images/logo/honda_bikes_logo.jpg',
      title: 'Honda',
    },
    {
      img: 'https://www.banglamotor.net/images/logo/hero_bikes_logo.jpg',
      title: 'Hero',
    },
    {
      img: 'https://www.banglamotor.net/images/logo/tvs_bikes_logo.jpg',
      title: 'TVS',
    },
    {
      img: 'https://www.banglamotor.net/images/logo/ktm_bikes_logo.jpg',
      title: 'KTM',
    },
    {
      img: 'https://www.banglamotor.net/images/logo/kawasaki_bikes_logo.jpg',
      title: 'kawasaki',
    },
    {
      img: 'https://www.banglamotor.net/images/logo/bajaj_bikes_logo.jpg',
      title: 'Bajaj',
    },
    {
      img: 'https://www.banglamotor.net/images/logo/suzuki_bikes_logo.jpg',
      title: 'Suzuki',
    },
    {
      img: 'https://www.banglamotor.net/images/logo/yamaha_bikes_logo.jpg',
      title: 'Yamaha',
    }
  ];
  



const About = () => {
    return (
        <div>

            {/*Our dreams  Parts*/}
           <Container  sx={{ flexGrow: 1 }}>       
            <Grid  sx={{p: 5}} container spacing={2}>
               
               {/* Our dream description part*/}
                <Grid  item  xs={12} md={6}>
                    <Box sx={{p: 2}}>
                        <Typography variant="h4" sx={{mb: 2, color: 'red'}}>
                           OUR DREAM
                        </Typography>
                        <Typography variant="h5">
                        MOTORCYCELE OR BIKE PRICE IN BANGLADESH AND OUR DREAM
                        </Typography>
                        <Typography  sx={{ my: 3, fontSize: 17, fontWeight: 400, color: 'blue' }}>
                        Welcome to Motoz! Before buying a motorcycle, many people’s doesn’t have enough time to spent in the motorcycle showroom to gather detailed information and analyze about all the brands and models. As a result most of the time buyers don’t know which brand or model is appropriate for them. Motoz makes it easy to simplify motorcycle buyer’s work. Here we mentioned almost all the motorcycle brands and their product details which is available in Bangladesh, we have presented details specifications and overview including price. All the brands may have same category motorcycle but their motorcycle feature May more or less compare to the several brands. Now a buyer or a motorcycle lover can easily compare same types of motorcycle with different brands.          
                      </Typography>
                    </Box>
                </Grid>

                {/* Our dream image part */}
                <Grid  sx={{mt: 7, mb: 3}} item xs={12} md={6} >
                    <img  style={{ width: '100%', borderRadius: '10px' }} src="https://i.ibb.co/gvhYczz/Screenshot-192.png"  alt="bike" />
                </Grid>
            </Grid>
         </Container>


         {/* safety packages */}
           <Container  sx={{ flexGrow: 1 }}>
             <Grid  sx={{p: 5}} container spacing={2}>
              
              {/* safety packages image*/}
               <Grid  sx={{mt: 4, mb: 3}} item xs={12} md={6} >
                    <img  style={{ width: '100%', borderRadius: '10px' }} src="https://i.pinimg.com/474x/3e/ff/21/3eff210599a3224d27b5a06e64c139b2.jpg"  alt="bike" />
                </Grid>

                {/* safety packages description*/}
                <Grid  item  xs={12} md={6}>
                    <Box sx={{p: 2}}>
                        <Typography variant="h4" sx={{mb: 2, color: 'red'}}>
                           SAFETY
                        </Typography>
                     
                        <Typography  sx={{ my: 3, fontSize: 18, fontWeight: 400}}>
                             In Bangladesh, the number of road casualties is not low, every year 12,000 road accidents happening and 35 thousand peoples are injured in road accidents in Bangladesh. Of these, a significant number of motorcycle accidents, such as a total of 3349 road accidents the 720 are motorcycle accidents in the year of 2017. As a result of this casualties, each family faces unheard damage. However, here we mentioned awareness about safety motorcycle riding. One of our main objectives is to reduce the road accident in Bangladesh. 
                        </Typography>
                    </Box>
                </Grid>                
            </Grid>
         </Container>


       {/* parter list */}
         <Container  sx={{ flexGrow: 1 }}>
            <Grid  sx={{p: 5}} container spacing={2}>
              
                   {/* parter list description*/}
                <Grid  item  xs={12} md={6}>
                    <Box sx={{p: 2}}>
                        <Typography variant="h4" sx={{mb: 2, color: 'red'}}>
                           OUR PARTNERS
                        </Typography>
                        <Typography variant="h5">
                        Our Participation in Vehicle Sector
                        </Typography>
                        <Typography  sx={{ my: 3, fontSize: 17, fontWeight: 400, color: '#F46518' }}>
                        It’s been long time Motoz performing a big role to improve Safety issues, Security issues, PPE (personal protective equipment) issues, Driver responsibilities, legal issues in road, traffic rules, vehicle legalization etc in vehicle sector specially motorcycle segment. Motoz also regular update motorcycle or bikes price in Bangladesh, including particulars and vital specifications, Review and availability here in this our own website.
                        </Typography>
                    </Box>
                </Grid>
             
                  {/* parter list image part*/}
                <Grid  sx={{mt: 7, mb: 3}} item xs={12} md={6} >
                <ImageList sx={{ width: 400, height: 350 }} cols={2} rowHeight={200}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                </Grid>
            </Grid>
         </Container>


        </div>
    );
};

export default About;