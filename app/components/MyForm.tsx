import { TextField } from "./TextField";
import { DateField } from "./DateField";

interface Props {
  disabled: boolean;
  name: string;
  contactNumber: string;
  iqamaNumber: string;
  dateOfBirth: Date;
  dateOfJoining: Date;
  email: string;
}

export const MyForm = ({
  disabled,
  name,
  contactNumber,
  iqamaNumber,
  dateOfBirth,
  dateOfJoining,
  email,
}: Props) => {
  return (
    <div>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Personal details</h2>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Name" disabled={disabled} />
          <DateField labelText="Date of Birth" disabled={disabled} />
        </div>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Contact No." disabled={disabled} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Personal details</h2>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Name" disabled={disabled} />
          <DateField labelText="Date of Birth" disabled={disabled} />
        </div>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Contact No." disabled={disabled} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Job details</h2>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Job title" disabled={disabled} />

          <TextField labelText="Contact No." disabled={disabled} />
        </div>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Contact No." disabled={disabled} />

          <TextField labelText="Contact No." disabled={disabled} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Education background</h2>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Contact No." disabled={disabled} />

          <TextField labelText="Contact No." disabled={disabled} />
        </div>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Contact No." disabled={disabled} />

          <TextField labelText="Contact No." disabled={disabled} />
        </div>
      </section>
    </div>
  );
};
