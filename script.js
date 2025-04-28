// script.js - Common JavaScript functions for Qatrah Hayat

document.addEventListener('DOMContentLoaded', () => {
    // Update Copyright Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('is-active');
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = mainNav.classList.contains('is-active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Optional: Close mobile nav when a link is clicked
    const navLinks = mainNav?.querySelectorAll('a');
    navLinks?.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('is-active')) {
                mainNav.classList.remove('is-active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Optional: Close mobile nav if clicked outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = mainNav?.contains(event.target);
        const isClickOnToggle = navToggle?.contains(event.target);

        if (mainNav?.classList.contains('is-active') && !isClickInsideNav && !isClickOnToggle) {
            mainNav.classList.remove('is-active');
            navToggle?.setAttribute('aria-expanded', 'false');
        }
    });

});

// =======================================
// Supabase Initialization (Centralized - Optional but recommended for larger apps)
// You can initialize it here and export it if using modules,
// or keep initializing it in each specific page's script tag
// if not using modules, which is simpler for this structure.
// For now, we will keep the initialization within each relevant HTML page's script tag
// just before it's needed, as done previously, to maintain the current structure's simplicity.
// =======================================
/*
const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // Replace with your actual URL
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your actual Anon Key

let supabaseClient;

try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        throw new Error("Supabase URL or Anon Key is missing.");
    }
    // Ensure the Supabase library is loaded before this script runs
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase Client Initialized Globally (Example)');
    } else {
        console.error('Supabase library not loaded before global script.');
    }

} catch (error) {
     console.error("Error initializing Supabase globally:", error);
     // Handle error appropriately, maybe show a message to the user
}
*/
// script.js - Common JavaScript functions for Qatrah Hayat

document.addEventListener('DOMContentLoaded', () => {
    // Update Copyright Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isActive = mainNav.classList.toggle('is-active');
            // Toggle aria-expanded attribute for accessibility
            navToggle.setAttribute('aria-expanded', isActive);
        });
    }

    // Optional: Close mobile nav when a link is clicked
    const navLinks = mainNav?.querySelectorAll('a');
    navLinks?.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav?.classList.contains('is-active')) {
                mainNav.classList.remove('is-active');
                navToggle?.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Optional: Close mobile nav if clicked outside the nav or toggle button
    document.addEventListener('click', (event) => {
        const isClickInsideNav = mainNav?.contains(event.target);
        const isClickOnToggle = navToggle?.contains(event.target);

        if (mainNav?.classList.contains('is-active') && !isClickInsideNav && !isClickOnToggle) {
            mainNav.classList.remove('is-active');
            navToggle?.setAttribute('aria-expanded', 'false');
        }
    });

});

// Supabase Initialization is kept within each page's script tag for simplicity
// in this structure, as discussed previously.