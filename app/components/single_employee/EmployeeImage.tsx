import { storage } from "@/firebaseConfig";
import { ChangeEvent, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEmployeeContext } from "@/app/context/EmployeeContext";
import classNames from "classnames";

export default function EmployeeImage() {
  const { data, isEditing, employeeMethods, imageUrl, setImageUrl } =
    useEmployeeContext();
  const { formState, clearErrors, reset, register } = employeeMethods;
  const [isOpen, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const [image, setImage] = useState(null);

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setIsUploaded(false);
    }
  };

  const handleImageUpload = () => {
    if (image) {
      setIsUploading(true);
      setIsUploaded(false);

      const imageRef = ref(storage, data?.employeeId);

      uploadBytes(imageRef, image)
        .then((snapshot) => {
          return snapshot.ref;
        })
        .then((data) => {
          return getDownloadURL(data);
        })
        .then((url) => {
          setImageUrl(url);
          setIsUploading(false);
          setIsUploaded(true);
        });
    }
  };

  const employeePictureStyle =
    "h-32 w-32 aspect-auto rounded-full border-2 border-myDarkBlue";
  return (
    <>
      <img
        className={employeePictureStyle}
        src={
          data?.employeePictureURL
            ? data.employeePictureURL
            : "https://cdn-icons-png.flaticon.com/128/456/456212.png"
        }
      />

      {isEditing && (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md w-full border mt-2 text-gray-500"
        >
          Edit picture
        </button>
      )}

      {isOpen && isEditing ? (
        <div className="absolute bg-white p-6 w-fit flex flex-col space-y-4 rounded-md shadow-md border border-slate-200 mt-2">
          <div className="flex justify-between items-center">
            <p className=" text-gray-500">Preview</p>
            <p className="text-green-600 font-medium">
              {isUploaded ? "Uploaded successfully" : ""}
            </p>
          </div>

          <div className="flex  space-x-12">
            {image && (
              <img
                src={URL.createObjectURL(image)}
                className="w-32 h-32 rounded-full"
              />
            )}
            <div className="flex flex-col">
              <input
                onChange={(e) => handleImageChange(e)}
                type="file"
                accept=".png, .jpg, .jpeg"
                className="mt-4 "
              />
            </div>
          </div>
          <button
            disabled={isUploading}
            className="p-2 rounded-md border border-green-500 hover:bg-green-100 text-green-600 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-none disabled:cursor-not-allowed"
            onClick={() => handleImageUpload()}
            type="button"
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
