  document.addEventListener('DOMContentLoaded', function() {
            const loadingScreen = document.getElementById('loading-screen');
            
            // Wait for all resources to load
            window.addEventListener('load', function() {
                // Add a small delay for better UX
                setTimeout(function() {
                    loadingScreen.classList.add('hidden');
                    
                    // Remove from DOM after animation completes
                    setTimeout(function() {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }, 3000); // 3 second delay to see the fullscreen video
            });
            
            // Fallback: If page takes too long to load
            setTimeout(function() {
                loadingScreen.classList.add('hidden');
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 5000); // Maximum 5 seconds loading time
        });