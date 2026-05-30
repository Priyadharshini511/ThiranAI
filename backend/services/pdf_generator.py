from reportlab.lib.pagesizes import letter, A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from io import BytesIO
import json

def generate_resume_pdf(resume_data):
    buffer = BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        rightMargin=72,
        leftMargin=72,
        topMargin=72,
        bottomMargin=18
    )
    
    story = []
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        spaceAfter=30,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#2c3e50')
    )
    
    section_style = ParagraphStyle(
        'SectionTitle',
        parent=styles['Heading2'],
        fontSize=16,
        spaceAfter=12,
        spaceBefore=20,
        textColor=colors.HexColor('#34495e')
    )
    
    content_style = ParagraphStyle(
        'Content',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=6,
        alignment=TA_LEFT
    )
    
    # Header
    story.append(Paragraph(resume_data.get('fullName', ''), title_style))
    story.append(Spacer(1, 12))
    
    # Contact Information
    contact_info = []
    if resume_data.get('email'):
        contact_info.append(resume_data['email'])
    if resume_data.get('phone'):
        contact_info.append(resume_data['phone'])
    if resume_data.get('linkedin'):
        contact_info.append(resume_data['linkedin'])
    if resume_data.get('github'):
        contact_info.append(resume_data['github'])
    
    if contact_info:
        story.append(Paragraph(" | ".join(contact_info), content_style))
        story.append(Spacer(1, 20))
    
    # Education Section
    if resume_data.get('education'):
        story.append(Paragraph("EDUCATION", section_style))
        for edu in resume_data['education']:
            edu_text = f"<b>{edu.get('degree', '')}</b><br/>{edu.get('school', '')}<br/>{edu.get('year', '')} | {edu.get('score', '')}"
            story.append(Paragraph(edu_text, content_style))
            story.append(Spacer(1, 6))
    
    # Internships Section
    if resume_data.get('internships'):
        story.append(Paragraph("INTERNSHIPS", section_style))
        for intern in resume_data['internships']:
            intern_text = f"<b>{intern.get('title', '')}</b> at {intern.get('company', '')}<br/>Duration: {intern.get('duration', '')}<br/>{intern.get('description', '')}"
            story.append(Paragraph(intern_text, content_style))
            story.append(Spacer(1, 6))
    
    # Projects Section
    if resume_data.get('projects'):
        story.append(Paragraph("PROJECTS", section_style))
        for project in resume_data['projects']:
            project_text = f"<b>{project.get('name', '')}</b><br/>Tech Stack: {project.get('tech', '')}<br/>{project.get('description', '')}"
            story.append(Paragraph(project_text, content_style))
            story.append(Spacer(1, 6))
    
    # Certifications Section
    if resume_data.get('certifications'):
        story.append(Paragraph("CERTIFICATIONS", section_style))
        for cert in resume_data['certifications']:
            cert_text = f"<b>{cert.get('name', '')}</b> - {cert.get('platform', '')} ({cert.get('year', '')})"
            story.append(Paragraph(cert_text, content_style))
            story.append(Spacer(1, 6))
    
    # Skills Section
    if resume_data.get('skills'):
        story.append(Paragraph("SKILLS", section_style))
        story.append(Paragraph(resume_data['skills'], content_style))
        story.append(Spacer(1, 6))
    
    # Achievements Section
    if resume_data.get('achievements'):
        story.append(Paragraph("ACHIEVEMENTS", section_style))
        story.append(Paragraph(resume_data['achievements'], content_style))
    
    doc.build(story)
    buffer.seek(0)
    return buffer.getvalue()
