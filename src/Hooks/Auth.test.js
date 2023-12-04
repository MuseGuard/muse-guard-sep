import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import { useLogin } from './Auth';

jest.mock('axios');

describe('useLogin', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should login successfully', async () => {
    const token = 'test-token';
    const response = { data: { token } };
    axios.post.mockResolvedValueOnce(response);

    const { result, waitForNextUpdate } = renderHook(() => useLogin());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.token).toBe(null);
    expect(result.current.success).toBe(false);

    act(() => {
      result.current.login('password');
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.token).toBe(token);
    expect(result.current.success).toBe(false);
  });

  test('should handle login error', async () => {
    const error = 'Invalid password';
    const response = { response: { data: { error } } };
    axios.post.mockRejectedValueOnce(response);

    const { result, waitForNextUpdate } = renderHook(() => useLogin());

    act(() => {
      result.current.login('password');
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(error);
    expect(result.current.token).toBe(null);
    expect(result.current.success).toBe(false);
  });

  test('should update password successfully', async () => {
    const response = { status: 200 };
    axios.patch.mockResolvedValueOnce(response);

    const { result, waitForNextUpdate } = renderHook(() => useLogin());

    act(() => {
      result.current.updatePassword('oldPassword', 'newPassword');
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.success).toBe(true);
  });

  test('should handle password update error', async () => {
    const error = 'Invalid password';
    const response = { response: { data: { error } } };
    axios.patch.mockRejectedValueOnce(response);

    const { result, waitForNextUpdate } = renderHook(() => useLogin());

    act(() => {
      result.current.updatePassword('oldPassword', 'newPassword');
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(error);
    expect(result.current.success).toBe(false);
  });
});