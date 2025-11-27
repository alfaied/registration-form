# Registration Form

A simple HTML registration form with basic client-side validation for username, email, phone number, and password fields.

## Pros
- Clean, responsive layout with clear field labels
- Basic client-side validation for common registration requirements
- Auto-clearing functionality for successful submissions
- Zero dependencies; works in all modern browsers
- Beginner-friendly JavaScript for learning form validation concepts
- Simple structure ideal for educational purposes

## Cons
- Form clears all fields regardless of validation success (even on errors), forcing users to re-enter data
- Email validation restricted to `@gmail.com` only (not realistic for general use cases)
- Phone number validation assumes fixed 13-digit format (inflexible for international numbers)
- Password validation lacks complexity checks (no special characters, numbers, or uppercase requirements)
- All validation occurs only on submission (no real-time feedback)
- Alert dialogs disrupt workflow; no inline error messages for specific fields
- No password confirmation field for security validation

## Takeaways
- Perfect starting point for learning form validation fundamentals
- Easy to enhance with features like:
  - Real-time validation with inline error messages (show errors next to fields)
  - Flexible email validation using regex (e.g., `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)
  - International phone number validation (e.g., using `libphonenumber` or regex patterns)
  - Password strength meter with complexity requirements
  - Only clearing fields on successful submission (not on errors)
  - Adding "Confirm Password" field with matching validation
  - Using `<input type="email">` and `<input type="tel">` for better native validation
- Ideal foundation for building professional registration systems with enhanced UX

## License
This project is licensed under the MIT License – see the LICENSE file for details.