
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_contact_email(name, email, message):
    sender_email = "941d79001@smtp-brevo.com"
    sender_password = os.getenv("BREVO_SMTP_PASSWORD")
    receiver_email = "thiranai2025@gmail.com"  # or your email to receive messages

    subject = f"New Contact Form Submission from {name}"

    # Create message
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg["Subject"] = subject

    body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP("smtp-relay.brevo.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
        print("✅ Email sent successfully.")
        return True
    except Exception as e:
        print("❌ Email failed to send:", repr(e))
        return False
