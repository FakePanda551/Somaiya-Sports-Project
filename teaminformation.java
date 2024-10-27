import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your Somaiya ID:");
        String id = scanner.nextLine();

        if (!id.endsWith("@somaiya.edu")) {
            System.out.println("Invalid ID. Please try again.");
            return;
        }

        System.out.println("Enter your password:");
        String password = scanner.nextLine();
        String regex = "^(?=.[0-9])(?=.[a-z])(?=.*[A-Z]).{8,20}$";

        if (!Pattern.matches(regex, password)) {
            System.out.println("Invalid password. Please try again.");
            return;
        }

        System.out.println("Login successful!");

        System.out.println("Choose an option:");
        System.out.println("1. Players");
        System.out.println("2. Teams");
        System.out.println("3. Leaderboard");

        int option = scanner.nextInt();
        scanner.nextLine();

        switch (option) {
            case 1:
                System.out.println("Choose a department:");
                System.out.println("1. AIDS");
                System.out.println("2. EXTC");
                System.out.println("3. COMPS");
                System.out.println("4. IT");

                int department = scanner.nextInt();
                scanner.nextLine();

                switch (department) {
                    case 1:
                        System.out.println("AIDS players:");
                        System.out.println("1. Aaayush Bharda");
                        System.out.println("2. Vedant Ambavne");
                        System.out.println("3. Amreliya Moin");
                        System.out.println("4. Krish Darji");
                        System.out.println("5. Prathamesh Chauhan");
                        System.out.println("6. Rohan Chiplunkar");
                        System.out.println("7. Soham Ambrule");
                        System.out.println("8. Aadit Jain");
                        System.out.println("9. Devansh Jadhav");
                        System.out.println("10. Hamza kapasi");
                        System.out.println("11. Shubham Oza");
                        System.out.println("12. Shubham Vishwakarma");
                        System.out.println("13. Rishi Padwal");

                        int players = scanner.nextInt();
                        scanner.nextLine();

                        switch (players) {
                            case 1:
                                System.out.println("RHB\n119 RUNS\n7 WICKS");
                                break;
                            case 2:
                                System.out.println("RHB\n10 RUNS\n1 WICKS");
                                break;
 case 3:
                                System.out.println("RHB\n132RUNS\n0 WICKS");
                                break;
 case 4:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 5:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 6:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 7:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 8:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 9:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 10:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 11:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 12:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 13:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;

                            // ...
                            default:
                                System.out.println("Error");
                        }
                        break;

                    case 2:
 System.out.println("EXTCplayers:");
                        System.out.println("1. Mihir Bhosale");
                        System.out.println("2. Swaraj Chede");
                        System.out.println("3. Anshu Taralekar");
                        System.out.println("4. Aryan Pandey");
                        System.out.println("5.Kamalesh");
                        System.out.println("6. Nirbhay Khumar");
                        System.out.println("7. Sai Raj");
                        System.out.println("8. Prathamesh Lahane");
                        System.out.println("9. Varad shinde");
                        System.out.println("10. Vraj Shah");
                        System.out.println("11.Varadraj vadarw");
                      

                        int players1 = scanner.nextInt();
                        scanner.nextLine();

                        switch (players1) {
                            case 1:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
                            case 2:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 3:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 4:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 5:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 6:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 7:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 8:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 9:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 10:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 11:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 12:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 13:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;

                            // ...
                            default:
                                System.out.println("Error");
                        }
                        
                        // ...
                        break;

                    case 3:
 System.out.println(" COMPS players:");
                        System.out.println("1. Jayesh Jain");
                        System.out.println("2. Aaryan Gori");
                        System.out.println("3.Bhavesh khadke");
                        System.out.println("4. Dev Mody");
                        System.out.println("5.Devesh Kichak");
                        System.out.println("6. Jash kothari");
                        System.out.println("7. Kenil");
                        System.out.println("8. Nayan nodia");
                        System.out.println("9.Pruthvi Metha");
                        System.out.println("10. Shaunak Gite");
                        System.out.println("11.Yash Mistry “) ;

                        int players2 = scanner.nextInt();
                        scanner.nextLine();

                        switch (players2) {
                            case 1:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
                            case 2:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 3:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 4:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 5:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 6:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 7:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 8:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 9:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 10:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 11:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 12:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 13:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;

                            // ...
                            default:
                                System.out.println("Error");
                        }
                        
                        // ...
                        break;

                    case 4:
 System.out.println("IT players:");
                        System.out.println("1. Prarambh N");
                        System.out.println("2. Rachit P");
                        System.out.println("3.Abhijit Mulik");
                        System.out.println("4.Akshat");
                        System.out.println("5.Anand Patel");
                        System.out.println("6. Bhumit nagda");
                        System.out.println("7. Devansh Shah");
                        System.out.println("8. Harsh Parmar ");
                        System.out.println("9.Harsh Mehta");
                        System.out.println("10. Siddhesh Pandey");
                        System.out.println("11.Raghav Misrty");
                        System.out.println("12.Yug Thakkar ");
                        

                        int players3 = scanner.nextInt();
                        scanner.nextLine();

                        switch (players3) {
                            case 1:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
                            case 2:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 3:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 4:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 5:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 6:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 7:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 8:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 9:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 10:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 11:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 12:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;
 case 13:
                                System.out.println("RHB\n100 RUNS\n10 WICKS");
                                break;

                            // ...
                            default:
                                System.out.println("Error");
                        }
                        
                        // ...
                        break;

                    default:
                        System.out.println("Error");
                }
                break;
