#include <iostream>
using namespace std;

class Hero
{
public:
    int health;
    string level;

    int getPhone(){
        return sizeof(phone);
    }

    int getHealth(){
        return health;
    }

    string getlevel(){
        return level;
    }

    void setHealth(int h){
        health = h;
    }

    void setLevel(string l){
        level = l;
    }

private:
    int phone;

    void print()
    {
        cout << "private member is accessible only inside the class :" << phone << endl;
    }
};
int main()
{
    // creation of an object
    Hero ramesh;
    ramesh.health = 70;
    ramesh.setHealth(100);
    ramesh.level = "Fresher";
    cout << "health is: " << ramesh.health << endl;
    cout << "Level is: " << ramesh.level << endl;

    // private member is not accessible
    // cout << "phone number is: " << ramesh.phone << endl;
    cout << "size of object ramesh :" << sizeof(ramesh) << endl;
    cout << "size eof ramesh health :" << sizeof(ramesh.health) << endl;
    cout << "size of ramesh level :" << sizeof(ramesh.level) << endl;
    cout << "size of ramesh phone :" << ramesh.getPhone() << endl;
    cout << "Ramesh health :"<< ramesh.health<< endl;
    return 0;
}  