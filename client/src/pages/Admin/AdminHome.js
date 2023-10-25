import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          In the development of the Blood Donation System, I created a dynamic MERN stack application that serves as a pivotal tool in optimizing blood donation processes. This comprehensive platform caters to a range of users, including donors, hospitals, organizations, and administrators. One of the system's key features is its role-based architecture, which accommodates these diverse user groups seamlessly. Donors can register and maintain their donation records, while hospitals and organizations can efficiently search for potential donors. Administrators hold comprehensive control over the platform, ensuring its smooth operation.

The system's security and scalability are paramount, ensuring data protection and robustness. Robust user authentication and authorization mechanisms, implemented using technologies such as JWT and bcrypt, safeguard sensitive user data. The system relies on MongoDB for efficient data storage, and the use of RESTful APIs guarantees seamless communication and scalability. Extensive testing protocols were deployed to ensure reliability, and the application was successfully deployed on cloud platforms, making it accessible to a wide audience.

Moreover, this project extends beyond its development phase; it represents an ongoing commitment to making a meaningful impact on the community by emphasizing the crucial role of technology in improving healthcare. Regular maintenance and enhancements showcase the project's relevance and importance. Through this initiative, I have demonstrated proficiency in web development, role-based access control, data modeling, and responsive design, all while addressing a critical healthcare need and advocating for the use of technology for social good.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;