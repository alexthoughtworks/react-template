import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  Tooltip,
  CardActionArea
} from '@mui/material';

import { styled } from '@mui/material/styles';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
        background: transparent;
        margin-left: -${theme.spacing(0.5)};
        margin-bottom: ${theme.spacing(1)};
        margin-top: ${theme.spacing(2)};
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
`
);

function Wallets({sushi, schnitzel, burger, green}) {
  const sushiPrice = 22.99;
  const schnitzelPrice = 16.50;
  const burgerPrice = 12.99;
  const greenPrice = 18.99;

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }}
      >
        <Typography variant="h3">Most Sold Meals</Typography>
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Add new wallet
        </Button>
      </Box>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3} item>
          <Card sx={{ px: 1 }}>
            <CardContent>
              
              <Typography variant="h5" noWrap>
                Sushi
              </Typography>
              <Typography variant="subtitle1" noWrap>
                Finest fish and veggies
              </Typography>
              <Box sx={{ pt: 3 }}>
                <Typography variant="h3" gutterBottom noWrap>
                  ${(sushi* sushiPrice).toFixed(2)}
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  ${sushiPrice}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Card sx={{ px: 1 }}>
            <CardContent>
              
              <Typography variant="h5" noWrap>
              Schnitzel
              </Typography>
              <Typography variant="subtitle1" noWrap>
              A german specialty!
              </Typography>
              <Box sx={{ pt: 3 }}>
                <Typography variant="h3" gutterBottom noWrap>
                  ${(schnitzel * schnitzelPrice).toFixed(2)}
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  ${schnitzelPrice}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Card sx={{ px: 1 }}>
            <CardContent>
              
              <Typography variant="h5" noWrap>
              Barbecue Burger
              </Typography>
              <Typography variant="subtitle1" noWrap>
              American, raw, meaty
              </Typography>
              <Box sx={{ pt: 3 }}>
                <Typography variant="h3" gutterBottom noWrap>
                  ${(burger * burgerPrice).toFixed(2)}
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  ${burgerPrice}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Tooltip arrow title="Click to add a new wallet">
            <CardAddAction>
              <CardActionArea sx={{ px: 1 }}>
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

export default Wallets;
