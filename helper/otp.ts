import axios from 'axios';

export interface OtpRequestPayload {
  email: string;
  isAdmin: boolean;
}

export interface OtpResult {
  id: number;
  status: string;
  email: string;
  action: string;
  otp: string;
  expiredAt: string;
  createdBy: string;
  createdAt: string;
}

export interface OtpData {
  result: OtpResult;
}

export interface OtpResponse {
  statusCode: number;
  statusMessage: string;
  data: OtpData;
}

export async function getOtp(payload: OtpRequestPayload): Promise<string> {
  try {
    const response = await axios.post<OtpResponse>(
      'https://api-staging.wastenot-official.com/member/auth/otp/request',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          Origin: 'localhost:3000',
        },
      }
    );
    // Safely extract otp from nested response structure
    const otp = response.data?.data?.result?.otp;

    if (!otp) {
      throw new Error('OTP not found in API response');
    }

    return otp;
  } catch (error: any) {
    // Log or handle error properly
    console.error('Failed to get OTP:', error.response?.data || error.message);
    throw error;
  }
}
