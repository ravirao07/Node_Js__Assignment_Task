import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Form } from 'react-bootstrap';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setimage] = useState(''); 
  const [validated, setValidated] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch existing post data for editing
      axios.get(`http://localhost:8080/user/getall/${id}`)
        .then(response => {
          setTitle(response.data.title);
          setAuthor(response.data.author);
          setContent(response.data.content);
          setTags(response.data.tags.join(', '));
          setimage(response.data.imageUrl); 
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();

      const postData = {
        title,
        author,
        content,
        tags: tags.split(',').map(tag => tag.trim()),
        image, 
      };

      if (id) {
        axios.patch(`http://localhost:8080/user/update/${id}`, postData)
          .then(() => navigate('/'))
          .catch(error => console.log(error));
      } else {
        axios.post('http://localhost:8080/user/create', postData)
          .then(() => navigate('/'))
          .catch(error => console.log(error));
      }
    }

    setValidated(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '40rem', padding: '20px' }} className="shadow-lg">
        <Card.Body>
          <Card.Title>{id ? 'Edit Post' : 'Create Post'}</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a title.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formAuthor" className="mt-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter the author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide an author name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formContent" className="mt-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={5}
                placeholder="Write your content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide some content.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formTags" className="mt-3">
              <Form.Label>Tags (comma separated)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter tags separated by commas"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide at least one tag.
              </Form.Control.Feedback>
            </Form.Group>

    
            <Form.Group controlId="formImageUrl" className="mt-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the image URL"
                value={image}
                onChange={(e) => setimage(e.target.value)} 
              />
            </Form.Group>

            {image && (
              <div className="mt-3">
                <img
                  src={image}
                  alt="Selected"
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </div>
            )}

            <Button variant="primary" type="submit" className="mt-3">
              Save
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogForm;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';

// const BlogForm = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [content, setContent] = useState('');
//   const [tags, setTags] = useState('');
//   const [image, setImage] = useState('');
//   const [validated, setValidated] = useState(false);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       // Fetch existing post data for editing
//       axios.get(`http://localhost:8000/user/getall/${id}`)
//         .then(response => {
//           setTitle(response.data.title);
//           setAuthor(response.data.author);
//           setContent(response.data.content);
//           setTags(response.data.tags.join(', '));
//           setImage(response.data.imageUrl);
//         })
//         .catch(error => console.log(error));
//     }
//   }, [id]);

//   const handleSubmit = (e) => {
//     const form = e.currentTarget;
//     if (form.checkValidity() === false) {
//       e.preventDefault();
//       e.stopPropagation();
//     } else {
//       e.preventDefault();

//       const postData = {
//         title,
//         author,
//         content,
//         tags: tags.split(',').map(tag => tag.trim()),
//         image,
//       };

//       if (id) {
//         axios.patch(`http://localhost:8000/user/update/${id}`, postData)
//           .then(() => navigate('/'))
//           .catch(error => console.log(error));
//       } else {
//         axios.post('http://localhost:8000/user/create', postData)
//           .then(() => navigate('/'))
//           .catch(error => console.log(error));
//       }
//     }

//     setValidated(true);
//   };

//   return (
//     <Container fluid className="d-flex justify-content-center align-items-center vh-100">
//       <Row className="w-100 justify-content-center">
//         <Col xs={12} md={8} lg={6}>
//           <Card className="shadow-lg p-3">
//             <Card.Body>
//               <Card.Title>{id ? 'Edit Post' : 'Create Post'}</Card.Title>
//               <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                 <Form.Group controlId="formTitle">
//                   <Form.Label>Title</Form.Label>
//                   <Form.Control
//                     required
//                     type="text"
//                     placeholder="Enter the title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please provide a title.
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="formAuthor" className="mt-3">
//                   <Form.Label>Author</Form.Label>
//                   <Form.Control
//                     required
//                     type="text"
//                     placeholder="Enter the author"
//                     value={author}
//                     onChange={(e) => setAuthor(e.target.value)}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please provide an author name.
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="formContent" className="mt-3">
//                   <Form.Label>Content</Form.Label>
//                   <Form.Control
//                     required
//                     as="textarea"
//                     rows={5}
//                     placeholder="Write your content here..."
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please provide some content.
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="formTags" className="mt-3">
//                   <Form.Label>Tags (comma separated)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter tags separated by commas"
//                     value={tags}
//                     onChange={(e) => setTags(e.target.value)}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please provide at least one tag.
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="formImageUrl" className="mt-3">
//                   <Form.Label>Image URL</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter the image URL"
//                     value={image}
//                     onChange={(e) => setImage(e.target.value)}
//                   />
//                 </Form.Group>

//                 {image && (
//                   <div className="mt-3">
//                     <img
//                       src={image}
//                       alt="Selected"
//                       className="w-100 rounded"
//                       style={{ height: 'auto' }}
//                     />
//                   </div>
//                 )}

//                 <Button variant="primary" type="submit" className="mt-3 w-100">
//                   Save
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default BlogForm;
