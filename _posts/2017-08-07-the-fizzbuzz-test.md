---
id: 153
title: 'The FizzBuzz Test'
date: '2017-08-07T10:18:17+00:00'
author: redr
layout: post
guid: 'http://samixmedia.de/?p=153'
permalink: /blog/2017/08/07/the-fizzbuzz-test/
image: 'http://redr.uber.space/wp-content/uploads/2021/06/wp-1624018813474-210x158.gif'
categories: Personal
tag: Coding
---

![FizzBuzz](/uploads/imgs/fizzbuzz.gif)

Recently I watched [this](https://www.youtube.com/watch?v=QPZ0pIK_wsc) amazing video from a YouTuber I would really recommend:

The Problem stated in the video describes a simple children´s game called FizzBuzz and goes like this: Two persons count up alternating while replacing numbers divisible by 3 with “Fizz”, all numbers divisible by 5 with “Buzz” and if divisible by both with “FizzBuzz”.  
So far so good. For computers this problem is easy to solve but hard to master. In the field of programing you can choose from different approaches that will lead to some solution of the given problem.

Some may can relate the style of coding to his or her work philosophy. Is the code redundant or inflexible for the sake of getting the solution done quickly? Or is more complexity giving the code a more solid fix for the problems that might come up later?

Here you can see my try on the FizzBuzz game in Java:

{% highlight java %}
public class FizzBuzz {
	/*Counts to 100 and says "Fizz" if dividable by 3, 
"Buzz" if dividable by 5 and "FizzBuzz" 
if dividable by both*/
	public static void main(String[] args) {
		String output = "";
		for (int i = 0; i < 100; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				System.out.println("FizzBuzz");
				output += "\nFizzBuzz";
			} else if (i % 3 == 0) {
				System.out.println("Fizz");
				output += "\nFizz";
			} else if (i % 5 == 0) {
				System.out.println("Buzz");
				output += "\nBuzz";
			} else {
				System.out.println(i);
				output += "\n"+String.valueOf(i);
			}
		}
	}
}
{% endhighlight %}

The output of the program line 1 to 20 looks something like this:

> FizzBuzz  
> 1  
> 2  
> Fizz  
> 4  
> Buzz  
> Fizz  
> 7  
> 8  
> Fizz  
> Buzz  
> 11  
> Fizz  
> 13  
> 14  
> FizzBuzz  
> 16  
> 17  
> Fizz  
> 19  
> Buzz

So what I´ve learned from my blind try.  
The method I used is called a if-else-ladder. Nevertheless I could have shortened line 8 to a simple i % 15 == 0. This would make things easier if you want to change the rules of the game later; e.g. you only have to edit three bits of code if you want to change the numbers.  
I learned a lot about my coding style and skill by letting my guide by intuition and speed. For this I also compared myself to the different approaches of others.

The use of an array makes up a short and one of the most interesting solutions:

{% highlight java %}
class FizzBuzz {
  public static void main( String [] args ) {
    for( int i = 1 ; i <= 100 ; i++ ) {
      System.out.println(
		new String[]{
		 i+"", "Fizz", "Buzz", "FizzBuzz"
		}[ ( i%3==0?1:0 ) + ( i%5==0?2:0 ) ]
	  );
    }
  }
}
{% endhighlight %}

Another solid and, how i think, experienced solution is the recursive one:

{% highlight java %}
public String fizzBuzz(int n){
  String s = "";
  if (n == 0)
    return s;
  if((n % 5) == 0)
    s = "Buzz" + s;
  if((n % 3) == 0)
    s = "Fizz" + s;
  if (s.equals(""))
    s = n + "";   
  return fizzBuzz(n-1) +  s;
}
{% endhighlight %}

Both of the code samples were found on this nice site called [rosettacode.org](http://rosettacode.org/wiki/FizzBuzz/Java).  
What you as maybe a person who isn´t into coding can learn from this for life is the fact that there are always many ways to victory. All solutions including mine are viable and at least outputs the game according to the given rules. We all have to make decisions and work out ways to handle with our problems and as long as you find your way and can learn and reflect on it, everything is fine.  
Thank you for reading!

Further interesting readings and sources:  
Blog Post –[ Using FizzBuzz to Find Developers who Grok Coding](https://imranontech.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/)  
Collection of Java solutions – [FizzBuzz/Java](http://rosettacode.org/wiki/FizzBuzz/Java)