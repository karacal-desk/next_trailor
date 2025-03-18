import { FC } from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
interface AdminEmailProps {
  name: string;
  phone: string;
  email: string;
  careerOption: string;
  message: string;
  subscribe: boolean;
  getTips: boolean;
  sellCreation: boolean;
  loanFacility: boolean;
}
export const AdminEmailTemplate: FC<Readonly<AdminEmailProps>> = ({
  name,
  phone,
  email,
  careerOption,
  message,
  subscribe,
  getTips,
  sellCreation,
  loanFacility,
}) => {
  const currentDateTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata", // Set time zone to India Standard Time
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <Html>
      <Head />
      <Preview>
        New Career Contact: {name} has contacted regarding {careerOption}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/game-lib-bd07d.appspot.com/o/files%2Fashaafoundation%2FLogo.png?alt=media&token=3238ba2c-866b-45e0-85e0-aa1473374895"
            alt="ASHAA-Tailoring Institute"
            width={80}
            height={80}
            style={logo}
          />
          <Section style={section}>
            <Heading style={heading}>New Enrollment Received</Heading>
            <Text style={paragraph}>
              A new student has enrolled in the institute. Below are the
              details:
            </Text>

            <Section style={detailsSection}>
              <Heading as="h3" style={subheading}>
                Student Details:
              </Heading>

              <Text style={detailRow}>
                <strong>Name:</strong> {name}
              </Text>
              <Text style={detailRow}>
                <strong>Email:</strong> {email}
              </Text>
              <Text style={detailRow}>
                <strong>message:</strong> {message}
              </Text>
              <Text style={detailRow}>
                <strong> selected career option:</strong> {careerOption}
              </Text>

              <Hr style={divider} />
              <Text style={paragraph}>
                <p>User has Selected Details below:</p>
                <ul>
                  {subscribe && (
                    <li>Subscibed with Us about future updates,</li>
                  )}

                  {getTips && (
                    <li>
                      For recieving Tips for Business, Skill Generation, Career
                    </li>
                  )}

                  {sellCreation && <li>For selling handmade crafts</li>}

                  {loanFacility && <li>For having Loans with MSME Guidance</li>}
                </ul>
              </Text>

              <Text style={detailRow}>
                <strong>Phone:</strong> {phone}
              </Text>
              <Text style={detailRow}>
                <strong>Enrollment Date:</strong> {currentDateTime}
              </Text>
            </Section>

            <Hr style={divider} />

            <Section>
              <Text style={paragraph}>
                Please review and take the necessary actions. You can access the
                full student profile in the admin dashboard.
              </Text>

              <Text style={actionButton}>
                <Link href="https://resend.com/emails" style={buttonLink}>
                  View in Dashboard
                </Link>
              </Text>
            </Section>

            <Text style={paragraph}>Best regards,</Text>
            <Text style={signature}>
              <strong>ASHAA Institute</strong>
            </Text>

            <Section style={footer}>
              <Text style={footerText}>
                © 2025 ASHAA Institute. All rights reserved.
              </Text>
              <Text style={footerText}>
                <Link href="https://example.com">Admin Portal</Link> |{" "}
                <Link href="https://example.com/help">Help Center</Link>
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f5f5f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0",
  maxWidth: "600px",
};
const section = {
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const logo = {
  margin: "0 auto 20px",
  display: "block",
};

const heading = {
  fontSize: "24px",
  color: "#333",
  marginBottom: "20px",
};

const subheading = {
  fontSize: "18px",
  color: "#333",
  marginBottom: "15px",
  marginTop: "25px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#444",
  margin: "0 0 20px",
};

const detailsSection = {
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "4px",
  marginBottom: "20px",
};

const detailRow = {
  fontSize: "15px",
  lineHeight: "1.5",
  color: "#444",
  margin: "0 0 10px",
};

const divider = {
  borderTop: "1px solid #ddd",
  margin: "25px 0",
};

const actionButton = {
  textAlign: "center" as const,
  margin: "30px 0",
};

const buttonLink = {
  backgroundColor: "#4a154b",
  borderRadius: "4px",
  color: "#ffffff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 30px",
};

const signature = {
  fontSize: "16px",
  color: "#333",
  marginTop: "10px",
  marginBottom: "30px",
};

const footer = {
  borderTop: "1px solid #ddd",
  marginTop: "30px",
  paddingTop: "20px",
};

const footerText = {
  fontSize: "14px",
  color: "#777",
  margin: "5px 0",
  textAlign: "center" as const,
};
