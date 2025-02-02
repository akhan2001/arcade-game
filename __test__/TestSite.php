<?php declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\WebDriverExpectedCondition;

final class TestSite extends TestCase
{
    //Add Test Cases Here or Create Test functions, following the test* naming convention
    public function testException(): void
    {
        if(strpos(file_get_contents('about.php'),"<?php include('about_snippet") != FALSE)
        {
            $this->assertTrue(true,'About me snippet has been added');
        }
        else
        {
            $this->assertTrue(false,'About me snippet is missing');
        }
        
    }

    // New test function for about.php
    public function testCurrentYearDisplayedInAbout(): void
    {
        // Start output buffering
        ob_start();
        include('about.php');
        $content = ob_get_clean(); // Get the contents of the buffer and clean the buffer

        // Extract the year from the content
        $currentYear = date("Y");

        // Use PHPUnit's assert function to check if the year is in the content
        $this->assertStringContainsString($currentYear, $content, "The current year $currentYear is not found in the output.");
        
        echo 'Found the year in the about php!';
    }

    public function testRestartButtonPresence(): void {
        // Assuming the button is generated server-side and its appearance is based on some condition
        // For demonstration, let's say it's based on a session variable or similar condition
    
        // $_SESSION['game_over'] = true;
    
        ob_start();
        include('snake.php');
        $content = ob_get_clean();
    
        $this->assertStringContainsString('id="restartGameBtn"', $content, 'Restart button is not found in the page content');
        
        echo 'Found the restart button!';
    }

    public function testPlayGameButtonPresence(): void {
        ob_start();
        include('snake.php');
        $content = ob_get_clean();
    
        $this->assertStringContainsString('id="playGameBtn"', $content, 'Play button is not found in the Snake page');
        
        echo 'Found the play game button!';
    }

     //Setting up testing for snake file
     public function testSnakeFile(): void
     {
         $original = file_get_contents('snake.php');
         $doc = new DOMDocument();
         $doc->loadHTML($original, LIBXML_NOERROR);
         $doc->SAVEHTML();
         $script = $doc->getElementsByTagName('script');
         $code = $script->item(5)->textContent;
         $javascriptFile = fopen("snakeFile.js","w");
         fwrite($javascriptFile, $code);
 
         $this->assertFileExists("snakeFile.js","Checking if file exists");
     }

      //Checking for login
    public function testLogin(): void
    {
        if(strpos(file_get_contents('index.php'),"Login") != FALSE)
        {
            
            $this->assertTrue(true,'Login');
        }
        else
        {
            $this->assertTrue(false,'Login missing');
        }   
    }
}


