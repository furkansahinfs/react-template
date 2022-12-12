import { ReactNode } from "react";

export interface DefaultFieldProps {
	type: string;
	required?: boolean;
	defaultValue?: string;
	[key: string]: any;
}

export interface FileProps {
	uri: string;
	type: string;
	name: string;
}

export interface ItemProps {
	name: string;
	size: string;
	type: string;
}

export interface NavbarMenuItem {
	name: string;
	linkTo: string;
	icon?: ReactNode;
}

export interface NotificationEntity {
	content: string | undefined | null;
	heading: string | undefined | null;
	id: number | string;
	parking_name: string | undefined | null;
	read: boolean | undefined | null;
	section_name: string | undefined | null;
	sent_at: string | undefined | null;
	sent_by: string | undefined | null;
}

export interface Point {
	lat: number;
	lng: number;
}

export interface IResponse {
	data: any;
	error?: string;
	success: boolean;
	status: number;
}

export interface RegionProps {
	latitude: number;
	longitude: number;
	latitudeDelta: number;
	longitudeDelta: number;
}

export interface ProfileData {
	email?: string;
	id?: number;
	name?: string;
	phone?: string;
	profile_picture?: string;
	surname?: string;
	address?: string;
}

export interface ChangeableProfileData {
	name?: string;
	phone?: string;
	surname?: string;
}

export interface SignupProps {
	email: string;
	name?: string;
	password: string;
	phone?: string;
	surname?: string;
}

export interface UserProps {
	_id: string;
	user: string;
	valid: boolean;
	userAgent?: string;
	createdAt?: string;
	updatedAt?: string;
	password: string;
	email: string;
	__v?: number;
}
