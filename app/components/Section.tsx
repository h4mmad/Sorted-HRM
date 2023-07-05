interface SectionProps {
  sectionTitle: string;
  inputFields: InputFields[];
}

interface InputFields {
  fieldName: string;
  fieldType: string;
}

export default function Section({ sectionTitle }: SectionProps) {
  return <></>;
}
