import { HospitalConfig } from '../config/hospitalData';

export interface WhatsAppAppointmentPayload {
  referenceId: string;
  patientName: string;
  phone: string;
  date: string;
  timeSlot: string;
  reason: string;
  notes?: string;
  timestamp: string;
}

/**
 * Generates formatted WhatsApp consultation message for Sarojini Devi Skin Hospital
 */
export function generateAppointmentWhatsAppMessage(
  payload: WhatsAppAppointmentPayload,
  hospitalData: HospitalConfig,
  language: 'en' | 'te' = 'en'
): string {
  if (language === 'te') {
    const lines = [
      `🏥 *నూతన చర్మ సంప్రదింపు అపాయింట్‌మెంట్*`,
      `*సరోజినీ దేవి స్కిన్ హాస్పిటల్*`,
      `వైద్యులు: డాక్టర్ సత్యనారాయణ, MD (డెర్మటాలజీ)`,
      `చిరునామా: భానుగుడి జంక్షన్, కాకినాడ`,
      `───────────────────────`,
      `📋 *బుకింగ్ సంఖ్య:* #${payload.referenceId}`,
      `👤 *రోగి పేరు:* ${payload.patientName}`,
      `📱 *ఫోన్ నంబర్:* ${payload.phone}`,
      `📅 *కోరుకున్న తేదీ:* ${payload.date}`,
      `⏰ *సమయం స్లాట్:* ${payload.timeSlot}`,
      `🩺 *చర్మ సమస్య / కారణం:* ${payload.reason}`,
    ];

    if (payload.notes && payload.notes.trim()) {
      lines.push(`📝 *రోగి వివరాలు / లక్షణాలు:* ${payload.notes.trim()}`);
    }

    lines.push(`───────────────────────`);
    lines.push(`💵 *చెల్లింపు విధానం:* కౌంటర్ వద్ద నగదు (Cash)`);
    lines.push(`_ఆసుపత్రి ఆన్‌లైన్ పోర్టల్ ద్వారా పంపబడింది_`);

    return lines.join('\n');
  }

  const lines = [
    `🏥 *NEW APPOINTMENT REQUEST*`,
    `*${hospitalData.hospitalName}*`,
    `Doctor: ${hospitalData.doctorName}, ${hospitalData.doctorQualification}`,
    `Location: ${hospitalData.location.landmark}, ${hospitalData.location.city}`,
    `───────────────────────`,
    `📋 *Booking Ref:* #${payload.referenceId}`,
    `👤 *Patient Name:* ${payload.patientName}`,
    `📱 *Patient Phone:* ${payload.phone}`,
    `📅 *Preferred Date:* ${payload.date}`,
    `⏰ *Preferred Slot:* ${payload.timeSlot}`,
    `🩺 *Consultation Reason:* ${payload.reason}`,
  ];

  if (payload.notes && payload.notes.trim()) {
    lines.push(`📝 *Patient Notes:* ${payload.notes.trim()}`);
  }

  lines.push(`───────────────────────`);
  lines.push(`💵 *Payment:* ${hospitalData.payment.mode} at counter`);
  lines.push(`_Sent via Hospital Online Appointment Portal_`);

  return lines.join('\n');
}

/**
 * Creates direct WhatsApp deep link to send appointment details to hospital WhatsApp number
 */
export function getWhatsAppAppointmentUrl(
  payload: WhatsAppAppointmentPayload,
  hospitalData: HospitalConfig,
  language: 'en' | 'te' = 'en'
): string {
  const targetNumber = hospitalData.contact.whatsappNumber || '919703629727';
  const cleanNumber = targetNumber.replace(/\D/g, '');
  const text = generateAppointmentWhatsAppMessage(payload, hospitalData, language);
  const encodedText = encodeURIComponent(text);

  return `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedText}`;
}
