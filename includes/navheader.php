<?php 
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
$login_text = isset($_SESSION['username']) ? $_SESSION['username'] : "Login"; 
?>
<header>
<nav class="header__nav">
	<div class="header__logo">
		<a href="index.php">
        <h4><span>MADOKA JAPANESE </span>RESTAURANT </h4> 
		</a>
            <div class="header__logo-overlay"></div>
    </div>
	
	
	<ul class="header__menu">
		<li class="dropdown__menu">
            <a href="index.php">Menu</a>
            <ul class="dropdown__content">
				<li><a href="buffetDetails.php">Buy Tickets</a></li>
                <li><a href="popular.php">Buffet Menu</a></li>
                <li><a href="buffetList.php">Buffet Ticket List</a></li>
                <li><a href="contact.php">Contact Us</a></li>
                <li><a href="aboutUs.php">About Us</a></li>
            </ul>
        </li>
    </ul>
	
	<ul class="header__menu">
		<li class="cart__menu">
			<a href="cart.php"class="cart-link">	
			<img src="assets/cart.png" alt="search" /> Cart
			</a>
	
		</li>
	</ul>

	<ul class="header__menu">
		<li>
		<?php if(isset($_SESSION['username'])) echo "<p class='welcome'>Welcome, <span class='username'>" . $_SESSION['username'] . "</span></p>"; ?>
		</li>
	</ul>
	
	<ul class="header__menu">
		<li>
			<a href="logout.php"> Log Out</a>	
			</a>
		</li>
	</ul>
	<ul class="header__menu-mobile">
		<li>
			<img src="assets/menu.svg" alt="menu"/>
		</li>
	</ul>
</nav>
</header>