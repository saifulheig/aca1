import Banner from "@/component/homePage/Banner";
import Become from "@/component/homePage/Become";
import Categories from "@/component/homePage/Categories";
import Courses from "@/component/homePage/Courses";
import ExpertInstructor from "@/component/homePage/ExpertInstructor";
import LatestNews from "@/component/homePage/LatestNews";
import WhyChoose from "@/component/homePage/WhyChoose";
// import { GoogleOAuthProvider } from '@react-oauth/google';
export default function Home() {
  return (
    <main className=" min-h-screen ">
      {/* <GoogleOAuthProvider clientId="176265386758-0efb84uh7k77k1cjtlqmecand83k5789.apps.googleusercontent.com"> */}
      <Banner />
      <Categories />
      <WhyChoose />
      <Courses />

      <ExpertInstructor />
      <Become />
      <LatestNews />
      {/* </GoogleOAuthProvider> */}
    </main>
  );
}
