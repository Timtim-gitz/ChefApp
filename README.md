Christoffel's Menu App

Project Overview

This app allows a private chef, Christoffel, to manage and display menu items with details like the dish name, description, course, and price. The app includes features for adding, viewing, filtering, and removing menu items.

Changes Implemented Since Part 2
1. Filter Feature
   - Added a filter button on the `HomeScreen` to enable filtering of menu items by course (e.g., starters, mains, desserts).
2. Average Price Display
   - Updated `HomeScreen` to calculate and display the average price of menu items per course.
3. Addition and Removal of Menu Items
   - Modified `MenuScreen` to allow multiple menu items to be added.
   - Added a "Remove Dish" button next to each menu item in `MenuScreen`, allowing the chef to delete individual items.
4. Navigation improvements 
   - Added a "Back to Home" button in `MenuScreen` for easy navigation back to the home screen.
5. Currency Update
   - Updated all displayed prices to use the South African Rand (R) currency.


Refactoring Changes
1. Code Organisation
   - Refactored the code to use consistent naming for components and properties, such as renaming the screens to `HomeScreen` and `MenuScreen` to ensure clarity.
2. Props Management
   - Adjusted `menuItems` and `removeMenuItem` as props in `MenuScreen` to properly handle menu additions and deletions. 
   - Reorganized state management in `App.tsx` for handling multiple menu items.
3. Styles and Layout
   - Streamlined styling across screens to improve readability and consistency.
   - Updated button placements and added descriptive labels for better user interaction.
