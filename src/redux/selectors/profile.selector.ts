import { RootState } from '@/redux';

export const PROFILE_DATA = (state: RootState) => state.profile.profileData;
export const UPDATE_PROFILE = (state: RootState) => state.profile.updateProfile;
