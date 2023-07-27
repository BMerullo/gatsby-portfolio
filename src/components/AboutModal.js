import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>Bob Merullo</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>JavaScript Developer</h3>
        <p>
          Hello, I am Bob Merullo, a passionate and skilled JavaScript Developer
          with three years of experience specializing in MERN (MongoDB,
          Express.js, React.js, Node.js), Gatsby, Node.js, and WordPress.
          Throughout my journey as a developer, I have worked on a wide range of
          projects, from building interactive web applications to creating
          stunning websites. Let me take you on a tour of my portfolio, where
          you can explore some of my most exciting and challenging work.
        </p>
        <h5>Frontend Technologies:</h5>
        <p>
          Proficient in HTML5, CSS3, and modern JavaScript libraries, with a
          keen eye for detail and visually stunning and user-friendly
          interfaces. Always exploring the latest frontend trends and best
          practices to ensure an exceptional user experience.
        </p>
        <h5>Problem-Solving and Collaboration:</h5>
        <p>
          As a JavaScript Developer, I take great pride in my problem-solving
          abilities and my effectiveness in team environments. When faced with
          challenges, I approach them with a methodical and analytical mindset,
          breaking down complex issues into manageable steps. My technical
          expertise in JavaScript and related frameworks allows me to develop
          innovative solutions that address the core of the problem. Working in
          a team setting comes naturally to me, and I thrive on collaborative
          efforts. I actively engage in discussions, sharing my insights and
          valuing the contributions of my teammates. I believe open
          communication is key to success, and I make sure to convey my ideas
          clearly and listen attentively to others' perspectives.
        </p>
        <h5>MERN Stack Development:</h5>
        <p>
          As a seasoned MERN developer, I have expertly harnessed the power of
          MongoDB, Express.js, React.js, and Node.js to build full-stack web
          applications. I possess a deep understanding of data management, user
          interfaces, and RESTful API development, ensuring that my projects are
          efficient, scalable, and user-friendly.
        </p>
        <h5>Gatsby:</h5>
        <p>
          My proficiency in Gatsby has allowed me to create lightning-fast,
          SEO-friendly websites. Leveraging Gatsby's static site generation
          capabilities and GraphQL, I have crafted elegant and performant web
          experiences that leave a lasting impression on users.
        </p>
        <h5>Next.js:</h5>
        <p>
          Incorporating Next.js into my skill set has enabled me to build
          dynamic and SEO-friendly applications with server-side rendering. My
          expertise in Next.js has proven invaluable in delivering
          high-performance web solutions and enhanced user experiences.
        </p>
        <h5>WordPress:</h5>
        <p>
          Recognizing the significance of WordPress in the web development
          landscape, I have dived into custom theme and plugin development. My
          proficiency in WordPress allows me to create tailor-made solutions,
          enhancing the platform's capabilities to meet clients' unique
          requirements.
        </p>
        <h5>Continuous Learning:</h5>
        <p>
          Passionate about staying updated with the latest trends and
          advancements in web development. Regularly exploring new technologies
          and tools to enhance skills and bring fresh ideas to each project.
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

const AboutModal = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <>
      <>
        <Button variant="outline-dark" onClick={() => setModalShow(true)}>
          Learn More
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </>
  )
}

export default AboutModal
