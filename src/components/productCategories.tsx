import "@/assets/sass/_products-categories.scss"
import { Container, Row, Col } from "react-bootstrap";


function ProductCategories() {

  const Categories = [
    { title: "Charming Concept", category: "Photography", img: "/assets/img/categories/project-img-1.jpg" },
    { title: "Linear Architecture", category: "Inspiration", img: "/assets/img/categories/project-img-2.jpg" },
    { title: "Endless Looks", category: "Nature", img: "/assets/img/categories/project-img-3.jpg" },
    { title: "Sleek Typography", category: "Design", img: "/assets/img/categories/project-img-4.jpg" },
    { title: "Ebony Vintage", category: "Fashion", img: "/assets/img/categories/project-img-5.jpg" },
    { title: "Orange Shine", category: "Food", img: "/assets/img/categories/project-img-6.jpg" },
    { title: "Boat Adventure", category: "Health", img: "/assets/img/categories/project-img-7.jpg" },
    { title: "Offroad Moves", category: "Nature", img: "/assets/img/categories/project-img-8.jpg" },
    { title: "Cozy Occupancy", category: "Design", img: "/assets/img/categories/project-img-9.jpg" },
  ];

  return (
    <section className="bg-light py-3 py-md-5">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
            <h2 className="mb-4 display-5 text-center">Our Projects</h2>
            <p className="text-secondary mb-5 text-center lead fs-4">
              We are passionate about creating innovative products. We believe that technology can make people's lives better.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </Col>
        </Row>
      </Container>

      <Container className="overflow-hidden">
        <div className="col-12 col-md-6 col-lg-6 bsb-project-1-item">
  <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
    <a href="#!">
      <img
        className="img-fluid bsb-scale bsb-hover-scale-up"
        src={Categories[0].img} // usamos la imagen de la constante
        alt={Categories[0].title} // alt dinámico
      />
    </a>
    <figcaption>
      <h3 className="text-white bsb-hover-fadeInUp">{Categories[0].title}</h3>
      <div className="text-white bsb-hover-fadeInDown">{Categories[0].category}</div>
    </figcaption>
  </figure>
</div>


      <div className="col-12 col-md-6 col-lg-3 bsb-project-1-item">
        <figure className="rounded rounded-4 overflow-hidden bsb-overlay-hover">
          <a href="#!">
            <img className="img-fluid bsb-scale-up bsb-hover-scale" src="" alt="">
          </a>
          <figcaption>
            <h3 className="text-white bsb-hover-fadeInLeft">Cozy Occupancy</h3>
            <div className="text-white bsb-hover-fadeInRight">Design</div>
          </figcaption>
        </figure>
      </div>
      </Container>
    </section>
  )
};
   


export default ProductCategories;