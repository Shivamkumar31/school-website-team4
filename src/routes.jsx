import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Facilities from "./pages/Facilities";
import Student from "./pages/Student";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Teacherdata from "./pages/Teacherdata";
import News from "./pages/News";
import Welcome from "./pages/Welcome";
import SchoolProfile from "./pages/Schoolprofile";
import Sanlat from "./pages/Sanlat";

export const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          return { title: "Home - Vishwa Bharati School" };
        },
      },
      {
        path: "about",
        Component: About,
        loader: async () => {
          return { title: "About - Vishwa Bharati Schoo" };
        },
      },
      {
        path: "gallery",
        Component: Gallery,
        loader: async () => {
          return { title: "Gallery - Vishwa Bharati School" };
        },
      },
      {
        path: "facilities",
        Component: Facilities,
        loader: async () => {
          return { title: "Facilities - Vishwa Bharati School" };
        },
      },
      {
        path: "student",
        Component: Student,
        loader: async () => {
          return { title: "Student - Vishwa Bharati School" };
        },
      },
      {
        path: "registration",
        Component: Registration,
        loader: async () => {
          return { title: "Registration - Vishwa Bharati School" };
        },
      },
      {
        path: "contact",
        Component: Contact,
        loader: async () => {
          return { title: "Contact - Vishwa Bharati School" };
        },
      },
      {
        path: "teacher-data",
        Component: Teacherdata,
        loader: async () => {
          return { title: "Teacher Data - Vishwa Bharati School" };
        },
      },
      {
        path: "news",
        Component: News,
        loader: async () => {
          return { title: "News - Vishwa Bharati School" };
        },
      },
      {
        path: "welcome",
        Component: Welcome,
        loader: async () => {
          return { title: "welcome - Vishwa Bharati School" };
        },
      },
      {
        path: "school-profile",
        Component: SchoolProfile,
        loader: async () => {
          return { title: "School Profile - Vishwa Bharati School" };
        },
      },
      {
        path: "sanlat",
        Component: Sanlat,
        loader: async () => {
          return { title: "Sanlat - Vishwa Bharati School" };
        },
      },
      {
        path: "*",
        Component: () => (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
              <p className="text-gray-600">Page not found</p>
            </div>
          </div>
        ),
      },
    ],
  },
];
