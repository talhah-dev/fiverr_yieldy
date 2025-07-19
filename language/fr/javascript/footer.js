const footer = document.getElementById('footer')
footer.innerHTML = `
      <footer class="bg-[#F3F3F3] md:mt-20 mt-10 w-full p-5 lg:px-12">
        <div class="max-w-7xl w-full mx-auto pt-8">
            <ul class="flex items-center gap-5 md:flex-row flex-col justify-between font-medium">
                <li><a href="#">FAQ’S</a></li>
                <li><a href="#">Aide</a></li>
                <li><a href="#">Conditions générales</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Plan du site</a></li>
            </ul>

            <div class="w-full h-[1px] rounded-full my-6 md:my-9 bg-zinc-900"></div>

            <div class="flex items-center justify-between gap-6 md:flex-row flex-col">
                <ul class="flex items-center justify-center gap-20 font-bold">
                    <li><a href="/language/fr/about.html">À propos</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
                <ul class="flex items-center justify-center text-white text-xl gap-2 font-bold">
                    <li class="rounded-full bg-black flex items-center justify-center w-10 h-10 "><a href="#"><i
                                class="fa-brands fa-instagram"></i></a></li>
                    <li class="rounded-full bg-black flex items-center justify-center w-10 h-10 "><a href="#"><i
                                class="fa-brands fa-facebook-f"></i></a></li>
                    <li class="rounded-full bg-black flex items-center justify-center w-10 h-10 "><a href="#"><i
                                class="fa-brands fa-youtube"></i></a></li>
                    <li class="rounded-full bg-black flex items-center justify-center w-10 h-10 "><a href="#"><i
                                class="fa-brands fa-twitter"></i></a></li>
                    <li class="rounded-full bg-black flex items-center justify-center w-10 h-10 "><a href="#"><i
                                class="fa-brands fa-telegram"></i></a></li>
                    <li class="rounded-full bg-black flex items-center justify-center w-10 h-10 "><a href="#"><i
                                class="fa-brands fa-tiktok"></i></a></li>
                </ul>
            </div>

        </div>
    </footer>
`