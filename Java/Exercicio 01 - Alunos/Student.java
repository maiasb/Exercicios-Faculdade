public class Student {
    private String name;
    public String registration;
    private String birthDate;

    public Student(String name, String registration, String birthDate) {
        this.name = name;
        this.registration = registration;
        this.birthDate = birthDate;
    }

    public String getRegistration() {
        return this.registration;
    }

    @Override
    public String toString() {
        return "Nome: " + this.name + "\nMatrícula: " + this.registration + "\nData de nascimento: " + this.birthDate;
    }

    @Override
    public boolean equals(Object o) {
        Student outro = (Student) o;
        return this.name.equals(outro.name);
    }
}