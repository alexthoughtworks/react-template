import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import { useEffect, useState } from 'react';
import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';
import {useQuery, gql} from "@apollo/client";

const GET_ORDERS = gql`
query {
  ordersSummary {
    count,
    total
  }
  
  productsSummary {
    id,
    total
  }
  
}

`
function DashboardCrypto() {
  const {data} = useQuery(GET_ORDERS, {
   
    pollInterval: 5000,
  })
  const [totalSells, setTotalSells] = useState(0)
  const [count, setCount] = useState(0)
  const [totalMeals, setTotalMeals] = useState({
    sushi:0,
    schnitzel: 0,
    burger: 0,
    green: 0
  })
  const [sumAllMeals, setSumAllMeals] = useState(0)
  let sortArray=[]
  useEffect(()=>{
    if(data){
      console.log(data)
    setTotalSells(data.ordersSummary.total)
    setCount(data.ordersSummary.count)
    sortArray =Array.from(data.productsSummary)
    sortArray.sort(function(a,b){
      return (a.id - b.id)
    })
    setTotalMeals({
      sushi: sortArray[0].total,
      schnitzel: sortArray[1].total,
      burger: sortArray[2].total,
      green: sortArray[3].total
    })
    setSumAllMeals(sortArray[0].total+ sortArray[1].total + sortArray[2].total + sortArray[3].total)
    }
  },[data])
  return (
    <>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <AccountBalance  {...totalMeals} total={totalSells} count={count} sum={sumAllMeals} />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets {...totalMeals} />
          </Grid>
          <Grid item lg={4} xs={12}>
            
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
