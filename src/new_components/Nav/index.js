import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

//
// import Logo from "../../Assets/Images/logomain.svg";
import Logo from "../../Assets/New_Images/Group10.svg";
import sellerLogo from "../../Assets/Images/logoSeller.svg";

const Styled = styled.div`
  // background-color: none !important;
  z-index: 6000 !important;
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;

  a {
    cursor: pointer;
  }
  .nav-link {
    font-weight: 600;
    color: ${(props) => props.color} !important;
    letter-spacing: 1px;
    margin-left: 5px;
    // font-size: 18px;
  }
  .bg-dark,
  .bg-light {
    background-color: transparent !important;
    padding: 4rem 0;
  }

  @media only screen and (max-width: 768px) {
    .bg-dark,
    .bg-light {
      background-color: transparent !important;
      padding: 2rem 0;
    }
  }
  @media only screen and (max-width: 991px) {
    .navbar-collapse {
      text-align: center;
      /* background: ${(props) =>
        props.Background ? props.Background : "#fff"}; */
      padding: 2rem 0;
    }
  }
`;
export default function Index({ Background }) {
  const router = useRouter();
  const path = router.pathname;
  // console.log(router);
  return (
    <Styled
      color={
        path === "/buyer" || path === "/seller" || path === "/"
          ? "#fff"
          : "#fff"
      }
      Background={Background}
    >
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
      >
        <Container fluid className="px-3 px-md-5">
          <Navbar.Brand as={Link} href="/">
            <div>
              <Image src={path === "/seller" ? Logo : Logo} alt="" />
              &nbsp;
              <span style={{fontSize: 30, color: 'white', fontWeight: '700'}}>Krib</span>
            </div>
            
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="ms-auto">
              <Nav.Link href="/seller">
                <a className="nav-link">Property owners</a>
              </Nav.Link>

              <Nav.Link href="/contact">
                <a className="nav-link"> Contact Us</a>
              </Nav.Link>
              <Nav.Link href="/faqs">
                <a className="nav-link"> FAQs</a>
              </Nav.Link>
              <Nav.Link href="/privacy-policy">
                <a className="nav-link"> Terms Of Service</a>
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styled>
  );
}
