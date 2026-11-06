// Trades: groups of federal program codes (CIP, 4-digit) that a student would think of as one trade.
// Program titles and all numbers come from College Scorecard; this file only decides the grouping.
export const TRADES = [
  { slug: 'electrician', name: 'Electrician', cips: ['4603'] },
  { slug: 'plumbing', name: 'Plumbing and pipefitting', cips: ['4605'] },
  { slug: 'hvac', name: 'HVAC and refrigeration', cips: ['4702'] },
  { slug: 'welding', name: 'Welding and machining', cips: ['4805'] },
  { slug: 'carpentry-construction', name: 'Carpentry and construction', cips: ['4600', '4601', '4602', '4604', '4699'] },
  { slug: 'auto-diesel-aviation-mechanic', name: 'Auto, diesel and aircraft mechanic', cips: ['4706'] },
  { slug: 'industrial-maintenance', name: 'Industrial and equipment maintenance', cips: ['4701', '4703', '4799'] },
  { slug: 'truck-driving', name: 'Truck and bus driving', cips: ['4902'] },
  { slug: 'pilot-aviation', name: 'Pilot and air transportation', cips: ['4901'] },
  { slug: 'registered-nursing', name: 'Registered nursing', cips: ['5138'] },
  { slug: 'practical-nursing', name: 'Practical nursing and nursing assistant', cips: ['5139'] },
  { slug: 'medical-assisting', name: 'Medical assisting and pharmacy tech', cips: ['5108'] },
  { slug: 'medical-technician', name: 'EMT, surgical tech and imaging', cips: ['5109'] },
  { slug: 'medical-office', name: 'Medical billing and office', cips: ['5107'] },
  { slug: 'dental', name: 'Dental assisting and hygiene', cips: ['5106'] },
  { slug: 'lab-technician', name: 'Clinical lab technician', cips: ['5110'] },
  { slug: 'massage-therapy', name: 'Massage therapy', cips: ['5135'] },
  { slug: 'cosmetology', name: 'Cosmetology and barbering', cips: ['1204'] },
  { slug: 'culinary', name: 'Culinary arts', cips: ['1205'] },
  { slug: 'computer-it', name: 'Computers and IT', cips: ['1101', '1102', '1103', '1104', '1105', '1106', '1107', '1108', '1109', '1110', '1111', '1199'] },
  { slug: 'engineering-technology', name: 'Engineering technology', cips: ['1500', '1503', '1504', '1505', '1506', '1507', '1508', '1509', '1510', '1511', '1512', '1513', '1514', '1599'] },
  { slug: 'police-fire', name: 'Police, fire and corrections', cips: ['4301', '4302'] },
  { slug: 'child-care', name: 'Child care and early education', cips: ['1907', '1312'] },
  { slug: 'office-admin', name: 'Office and business support', cips: ['5204'] },
  { slug: 'accounting', name: 'Bookkeeping and accounting', cips: ['5203'] },
  { slug: 'paralegal', name: 'Paralegal', cips: ['2203'] },
  { slug: 'design', name: 'Graphic and applied design', cips: ['5004'] },
  { slug: 'agriculture', name: 'Agriculture and horticulture', cips: ['0100', '0101', '0102', '0103', '0104', '0105', '0106', '0107', '0108', '0109', '0110', '0111', '0112', '0199'] }
];

export const TRADE_BY_CIP = new Map(TRADES.flatMap((t) => t.cips.map((c) => [c, t])));
export const tradeFor = (cip) => TRADE_BY_CIP.get(cip) || null;
export const CREDENTIAL = { 1: 'Certificate', 2: 'Associate degree', 3: "Bachelor's degree" };
