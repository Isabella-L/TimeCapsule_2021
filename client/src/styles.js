import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    // borderRadius: 15,
    // margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
    background: 'rgba(0,0,0,1)',
    boxShadow: "none" ,
  },
  heading: {
    // color: 'rgba(0,0,0,1)',
  },
  image: {
    marginLeft: '15px',
    width: '10%',
  },
}));