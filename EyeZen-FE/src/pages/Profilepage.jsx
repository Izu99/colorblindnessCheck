import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { useParams } from "react-router-dom";
import axios from "../apis/axios";

const Profile = () => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		mobile: "",
		id: "", // Include id in the state
	});

	const { id } = useParams();

	useEffect(() => {
		fetchUserData();
	}, [id]);

	const fetchUserData = async () => {
		try {
			const response = await axios.get(`/profile/${id}`);
			const { _id, name, email, mobile } = response.data; // Extract id from response
			setUserData({ id: _id, name, email, mobile }); // Set id in the state
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	const handleUpdateProfile = async () => {
		try {
			await axios.put(`/profile/${id}`, userData);
			message.success("Profile updated successfully!");
		} catch (error) {
			console.error("Error updating profile:", error);
			message.error("Failed to update profile. Please try again later.");
		}
	};

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	return (
		<div className='flex justify-center items-center h-full my-4'>
			<div className='max-w-md w-full bg-white p-8 rounded-lg shadow-xl'>
				<h1 className='text-4xl font-bold text-center text-[#004AAD]'>Profile</h1>
				<h2 className='pt-6 pb-3 font-semibold text-lg text-center'>User Information</h2>
				<Form layout='vertical'>
					<div className='pt-2'>
						<Form.Item label='Full Name'>
							<Input value={userData.name} name='name' onChange={handleChange} />
						</Form.Item>
					</div>

					<div className='pt-2'>
						<Form.Item label='Email'>
							<Input value={userData.email} name='email' onChange={handleChange} />
						</Form.Item>
					</div>

					<div className='pt-2'>
						<Form.Item label='Phone Number'>
							<Input value={userData.mobile} name='mobile' onChange={handleChange} />
						</Form.Item>
					</div>

					<div className='pt-2'>
						{/* Display the id in a disabled input field */}
						<Form.Item label='ID'>
							<Input value={userData.id} name='id' disabled />
						</Form.Item>
					</div>

					<div className='pt-2'>
						<Button type='primary' onClick={handleUpdateProfile} className='w-full bg-[#004A10]'>
							Update Profile
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default Profile;
