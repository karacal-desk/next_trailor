import { FC } from "react";

interface UserEmailProps {
  firstName: string;
  course: string;
}

interface AdminEmailProps {
  firstName: string;
  lastName: string;
  course: string;
  address: string;
  pincode: string;
  phone: string;
  email: string;
}

export const UserEmailTemplate: FC<Readonly<UserEmailProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Dear {firstName},</h1>
    <p>
      Thank you for enrolling in our institute! Your enrollment has been
      submitted and confirmed. An authority will be reaching out to you shortly.
      Stay tuned!
    </p>
    <p>Best regards,</p>
    <p>
      <strong>ASHAA-Tailoring Institute</strong>
    </p>
  </div>
);

export const AdminEmailTemplate: FC<Readonly<AdminEmailProps>> = ({
  firstName,
  lastName,
  course,
  address,
  pincode,
  phone,
  email,
}) => (
  <div>
    <h1>New Enrollment Received</h1>
    <p>A new student has enrolled in the institute. Below are the details:</p>
    <h3>Student Details:</h3>
    <p>
      <strong>Name:</strong> {firstName} {lastName}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>

    <p>
      <strong>Course:</strong> {course}
    </p>
    <p>
      <strong>Address:</strong> {address}
    </p>
    <p>
      <strong>Pincode:</strong> {pincode}
    </p>
    <p>
      <strong>Phone:</strong> {phone}
    </p>
    <p>Please review and take the necessary actions.</p>
    <p>Best regards,</p>
    <p>
      <strong>ASHAA-Tailoring Institute</strong>
    </p>
  </div>
);
