<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use JetBrains\PhpStorm\NoReturn;

class UserController extends Controller
{
    // Register API
    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'isTeacher' => 'required',
            'name'      => 'required|string',
            'email'     => 'required|email|unique:users',
            'password'  => 'required|string|min:6',

        ]);

        $user = User::create([
            'isTeacher' => $request->isTeacher,
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => Hash::make($request->password),
        ]);

        return response()->json(['user' => $user, 'message' => 'User registered successfully']);
    }

    // Login API
    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'email'     => 'required|email',
            'password'  => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json(['user' => $user->id, 'token' => $token, 'message' => 'Login successful']);
        } else {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
    }

    public function getTotalUsersCount(): \Illuminate\Http\JsonResponse
    {
        $userCount = User::count();

        return response()->json(['total_users' => $userCount]);
    }

    public function updateLoggedInStatus($userId, $isLoggedIn): \Illuminate\Http\JsonResponse
    {
        $user = User::find($userId);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->update(['isLoggedIn' => $isLoggedIn]);

        return response()->json(['user' => $user, 'message' => 'Login status updated successfully']);
    }

    public function getUserData(): \Illuminate\Http\JsonResponse
    {
        // Fetch user data from the database
        $userData = User::select('id', 'name', 'email', 'isTeacher')
            ->get();

        // Return the user data as JSON response
        return response()->json($userData);
    }
}
