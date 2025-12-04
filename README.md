# Component Creation & Props

## Overview

This lab implements a small, reusable, type-safe component library using React and TypeScript. The goal was to practice:
- Creating functional components with proper TypeScript prop interfaces
- Using component composition
- Handling optional props and children
- Applying clean, maintainable styling via CSS classes

Live Demo: http://localhost:5173/

## Components
### 1. AlertBox
- Supports four types: `success`, `error`, `warning`, `info`
- Customizable message and optional close button

### 2. UserProfileCard
- Shows email and role via boolean props
- Includes an "Edit Profile" button with callback

### 3. ProductDisplay
- Shows product image, name, price, description, and stock status
- "Add to Cart" button that is disabled when out of stock
- Triggers a success AlertBox when clicked

## Reflection

1. How did you handle optional props in your components?
- I made optional props using the ? syntax in TypeScript interfaces like 
showEmail?: boolean, 
onClose?: () => void.

2. What considerations did you make when designing the component interfaces?
- I have made each component is independent and can be used in any project and included callbacks like onEdit and onAddToCart with proper parameter types.
3. How did you ensure type safety across your components?
- I have used union types like 'success' | 'error' | 'warning' | 'info'; instead of strings.
4. What challenges did you face when implementing component composition?
- The success alert was not appearing I have it fixed by correctly managing state in App.tsx
- "In Stock" text was missing due to a typo in className and fixed by correcting the conditional rendering
- Grid layout wasn’t working until I added the .card-grid class in CSS