const header = document.querySelector(".navbar")

        window.addEventListener("scroll", function() {
            header.classList.toggle("sticky", window.scrollY > 60)
        });

        window.onscroll = function() {scrollFunction()};

        function scrollFunction(){
            const backToTopBtn = document.getElementById("backToTopBtn")
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                backToTopBtn.style.display = "block"
            } else {
                backToTopBtn.style.display = "none"
            }
        }

        function topFunction(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }

        document.getElementById('menu-icon').addEventListener('click', function() {
            var navList = document.querySelector('.navlist');
            var navbar = document.querySelector('.navbar');
            navList.classList.toggle('show');
            navbar.classList.toggle('show');
        });

        document.querySelectorAll('.navlist a').forEach(function(navLink) {
            navLink.addEventListener('click', function() {
                document.querySelector('.navlist').classList.remove('show');
                document.querySelector('.navbar').classList.remove('show');
            });
        });

        document.querySelector('.close-menu').addEventListener('click', function() {
            document.querySelector('.navlist').classList.remove('show');
            document.querySelector('.navbar').classList.remove('show');
        });

        document.addEventListener('DOMContentLoaded', function () {
            var video = document.getElementById('spaceVideo');

            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            }, {
                threshold: 0.5
            });

            observer.observe(document.getElementById('space'));
        });