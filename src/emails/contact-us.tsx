import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Text,
  } from '@react-email/components';
  import { CSSProperties } from 'react';
  
  export const ContactUsEmail = () => (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>You are now verified as NUS student.</Text>
          <Text style={paragraph}></Text>
        </Container>
      </Body>
    </Html>
  );
  
  const main: CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container: CSSProperties = {
    margin: '0 auto',
    padding: '20px 0 48px',
  };
  
  const paragraph: CSSProperties = {
    fontSize: '16px',
    lineHeight: '26px',
  };