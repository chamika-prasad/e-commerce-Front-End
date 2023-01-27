import {MDBFooter,MDBContainer,MDBCol,MDBRow,MDBIcon,MDBBtn} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default function Footer() {

    return (
        <MDBFooter className='text-center text-white ' style={{ backgroundColor: '#f1f1f1' }}>
          <MDBContainer className='pt-1'>
            <section className='mb-1'>
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-0 2 0 0'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fab fa-facebook-f' />
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-twitter' />
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-google' />
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-instagram' />
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-linkedin' />
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-github' />
              </MDBBtn>
            </section>
          </MDBContainer>
    
          <div className='text-center text-dark p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright:
            <a className='text-dark' href='#'>
              Aventude.com
            </a>
          </div>
        </MDBFooter>
      );
}
