
import './App.css';


function App() {

  return (
    <>
    
    
    <header id="header">
            <div id="div_logo">
             <h1 id="logo">EDYODA</h1>
            <h4 id="stories">Stories</h4>
            </div>
            
            <h5 id="dropdown">explore categories</h5>
            <i class="fa-solid fa-caret-down" id="icon_2"></i>

        </header>

        <main id="main">
            <h1 id="trend_cat">Trending Post</h1>
            <i class="fa-solid fa-filter" id="icon_1"></i>
            <h4 id="filt_cat">Filter by category</h4>
            <div id="container">
                <button class="categories" id="">All</button>
                <button class="categories">Artificial Intelligence</button>
                <button class="categories">Cloud Computing</button>
                <button class="categories">DevOps</button>
                <button class="categories">Programming Languages</button>
                <button class="categories">Mobile Application Development</button>
                <button class="categories">Technology and Tools</button>
                <button class="categories">Get a Job in a Tech Company</button>
                <button class="categories">Others</button>

            </div>
            <section class="items">

                <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt=""/>
                <div class="inner_div">
                    <h3>Intoduction to a Machine Learning</h3>
                    <h5 class="author">Edyoda</h5>
                    <h5 class="date">| 24 Aug 2019</h5>
                    <p>We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a</p>
                </div>
            </section>
            <section class="items">

                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt=""/>
                <div class="inner_div">
                    <h3>LAMP Stack vs MEAN Stack</h3>
                    <h5 class="author">Edyoda</h5>
                    <h5 class="date">| 24 Aug 2019</h5>
                    <p>In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement.</p>
                </div>
            </section>
            
            <section class="items">
            
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt=""/>
                <div class="inner_div">
                    <h3>Impcat of Cloud Computing in various industries</h3>
                    <h5 class="author">Edyoda</h5>
                    <h5 class="date">|24 Aug 2019</h5>
                    <p>Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global</p>
                </div>
            </section>
            
            <section class="items">
            
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" alt=""/>
                <div class="inner_div">
                    <h3>Challenges of machine Learning in Big Data</h3>
                    <h5 class="author">Edyoda</h5>
                    <h5 class="date">| 24 Aug 2019</h5>
                    <p>Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data</p>       
                </div>
            </section>
            
            <section class="items">
            
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" alt=""/>
                <div class="inner_div">
                    <h3>Breaking the Myth around the Cyber Security</h3>
                    <h5 class="author">Edyoda</h5>
                    <h5 class="date">| 24 Aug 2019</h5>
                    <p>As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies</p>
                </div>
            </section>
            
            <section class="items">
            
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" alt=""/>
                <div class="inner_div">
                    <h3>Importance of Data Backup and Recovery</h3>
                    <h5 class="author">Edyoda</h5>
                    <h5 class="date">| 24 Aug 2019</h5>
                    <p>A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the</p>
                </div>
            </section>

            </main>
        <footer id="footer"> </footer>


    </>
  );
}

export default App;
