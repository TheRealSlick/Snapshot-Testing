import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imgs/imcool.jpg" />
      <Card.Body>
        <Card.Title>The Greatest!</Card.Title>
              <Card.Text>
                  TheRealSlick
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default GitHubCard;