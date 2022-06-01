import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  Hidden,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';

import { styled } from '@mui/material/styles';
import TrendingUp from '@mui/icons-material/TrendingUp';
import AccountBalanceChart from './AccountBalanceChart';
import Text from 'src/components/Text';
import {useQuery, gql} from "@apollo/client";
import { useEffect, useState } from 'react';

const GET_ORDERS = gql`
query {
  ordersSummary {
    count,
    total
  }
}
query {
  productsSummary {
    id,
    total
  }
}
`

const AccountBalanceChartWrapper = styled(AccountBalanceChart)(
  () => `
      width: 100%;
      height: 100%;
`
);
const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

function AccountBalance({sushi, schnitzel, burger, green, total, count,sum}) {
 
  const sushiPer = Math.ceil(sushi/sum*100);
  const schnitzelPer = Math.ceil(schnitzel/sum*100);
  const burgerPer = Math.ceil(burger/sum*100)
  const greenPer = Math.ceil(green/sum*100)
 
  const cryptoBalance = {
    datasets: [
      {
        data: [sushiPer, schnitzelPer , burgerPer, greenPer],
        backgroundColor: ['#ff9900', '#1c81c2', '#333', '#5c6ac0']
      }
    ],
    labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum']
  };

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography sx={{ pb: 3 }} variant="h4">
              Total Sells
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
                ${total.toFixed(2)}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                number orders: {count}
              </Typography>
              
            </Box>
            
          </Box>
        </Grid>
        <Grid
          sx={{ position: 'relative' }}
          display="flex"
          alignItems="center"
          item
          xs={12}
          md={6}
        >
          <Hidden mdDown>
            <Divider absolute orientation="vertical" />
          </Hidden>
          <Box p={4} flex={1}>
            <Grid container spacing={0}>
              <Grid
                xs={12}
                sm={5}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box style={{ height: '160px' }}>
                  <AccountBalanceChartWrapper data={cryptoBalance} />
                </Box>
              </Grid>
              <Grid xs={12} sm={7} item display="flex" alignItems="center">
                <List disablePadding sx={{ width: '100%' }}>
                  <ListItem disableGutters>
                    <ListItemAvatar
                      sx={{
                        minWidth: '46px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      
                    </ListItemAvatar>
                    <ListItemText
                      primary="Sushi"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Finest fish and veggies"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        {sushiPer}%
                      </Typography>
                      <Text color="success">{sushiPer}</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatar
                      sx={{
                        minWidth: '46px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      
                    </ListItemAvatar>
                    <ListItemText
                      primary="Schnitzel"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="A german specialty!"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        {schnitzelPer}%
                      </Typography>
                      <Text color="error">-1.22%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatar
                      sx={{
                        minWidth: '46px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                     
                    </ListItemAvatar>
                    <ListItemText
                      primary="Barbecue Burger"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="American, raw, meaty"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        {burgerPer}%
                      </Typography>
                      <Text color="success">+10.50%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatar
                      sx={{
                        minWidth: '46px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      
                    </ListItemAvatar>
                    <ListItemText
                      primary="Green Bowl"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Healthy...and green..."
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        {greenPer}%
                      </Typography>
                      <Text color="error">-12.38%</Text>
                    </Box>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AccountBalance;
