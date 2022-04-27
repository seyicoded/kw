import NavBar from "../../components/Nav";
import SellerHeader from "../../components/SellerHeader";
import SellerFeatures from "../../components/SellerFeatures";
import ThisIsWereKbri from "../../components/ThisIsWereKbri";
import WhyUseKribe from "../../components/WhyUseKribe";
import BeTheFirstToKnow from "../../components/BeTheFirstToKnow";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
//
import { whyuskibru } from "../../Data";
export default function index() {
  return (
    <div style={{ backgroundColor: " #e5e5e5", overflow: "hidden" }}>
      <NavBar />
      <SellerHeader />
      <SellerFeatures />
      <ThisIsWereKbri />
      <WhyUseKribe whyuskibru={whyuskibru} />
      <BeTheFirstToKnow />
      <Form btnText={"JOIN THE WAITLIST"} />
      <Footer padding={"5rem 0 3rem 0"} />
    </div>
  );
}
