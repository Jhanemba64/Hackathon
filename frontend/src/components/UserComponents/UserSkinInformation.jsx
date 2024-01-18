import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function UserSkinInformation({ user }) {
  const [skinType1, setSkinType1] = useState(user.data.skin_type_1);
  const [skinType2, setSkinType2] = useState(user.data.skin_type_2);
  const [skinType3, setSkinType3] = useState(user.data.skin_type_3);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const skinOptions = [
    { id: 1, label: "Dull" },
    { id: 2, label: "Tired" },
    { id: 3, label: "Dry" },
    { id: 4, label: "Sensitive" },
    { id: 5, label: "Aging" },
    { id: 6, label: "Oily" },
    { id: 7, label: "Normal" },
    { id: 8, label: "Combination" },
    { id: 9, label: "All Skin Types" },
  ];

  const editUser = () => {
    const updatedUser = {
      firstname: user.data.firstname,
      lastname: user.data.lastname,
      email: user.data.email,
      city: user.data.city,
      country: user.data.country,
      latitude: user.data.latitude,
      longitude: user.data.longitude,
      age: user.data.age,
      skinType1: parseInt(skinType1, 10),
      skinType2: parseInt(skinType2, 10),
      skinType3: parseInt(skinType3, 10),
    };

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/${user.id}`,
        updatedUser
      )
      .then((res) => {
        const updatedUserData = res.data;
        setSkinType1(updatedUserData.data.skin_type_1);
        setSkinType2(updatedUserData.data.skin_type_2);
        setSkinType3(updatedUserData.data.skin_type_3);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="border-4 border-solid flex flex-col rounded-2xl m-4 p-4 w-fit">
      <h1 className="font-CamptonBook text-3xl font-bold mb-6">
        User Skin Information
      </h1>
      <div>Type de peau 1 : {skinType1}</div>
      <div>Type de peau 2 : {skinType2}</div>
      <div>Type de peau 3 : {skinType3}</div>
      <button
        type="button"
        className="border-black border-2 bg-black text-white w-fit p-3 pl-7 pr-7"
        onClick={openModal}
      >
        Modifier les types de peau
      </button>
      <Modal
        isOpen={isModalVisible}
        onRequestClose={closeModal}
        contentLabel="Edit Skin Types"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        className="bg-gray-300 rounded-lg p-6 max-w-md mx-auto"
      >
        <div className="text-gray-600 space-y-4">
          <div className="mb-1">
            Type 1:
            <select
              value={skinType1}
              onChange={(e) => setSkinType1(e.target.value)}
            >
              {skinOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-1">
            Type 2:
            <select
              value={skinType2}
              onChange={(e) => setSkinType2(e.target.value)}
            >
              {skinOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-1">
            Type 3:
            <select
              value={skinType3}
              onChange={(e) => setSkinType3(e.target.value)}
            >
              {skinOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-4">
          <button
            type="button"
            className="border-black border-2 bg-black text-white w-fit p-3 pl-7 pr-6"
            onClick={editUser}
          >
            Mettre à jour
          </button>
          <button
            type="button"
            className="border-black border-2 bg-black text-white w-fit p-3 pl-7 pr-7"
            onClick={closeModal}
          >
            Fermer
          </button>
        </div>
      </Modal>
    </div>
  );
}

UserSkinInformation.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    data: PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      email: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      age: PropTypes.number,
      skin_type_1: PropTypes.number,
      skin_type_2: PropTypes.number,
      skin_type_3: PropTypes.number,
    }).isRequired,
  }).isRequired,
};