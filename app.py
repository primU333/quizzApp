from flask import Flask, render_template, redirect, url_for, flash, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.secret_key = 'code333/404!'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///quiz.db'
db = SQLAlchemy(app)

#create database
class users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fName = db.Column(db.String(10), nullable=False)
    oName = db.Column(db.String(10), nullable=False)
    email = db.Column(db.String(), nullable=True)
    phone = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(7), nullable=False)
    password = db.Column(db.String(), nullable=False)
    Cpassword = db.Column(db.String(), nullable=False)

def __init__(self, fName, oName, email, phone, gender, password, Cpassword):
    self.fName = fName
    self.oName = oName
    self.email = email
    self.phone = phone
    self.gender = gender
    self.password = password
    self.Cpassword = Cpassword



def __repr__(self):
    return '<User %r>' % self.id


@app.route('/')
def index():
    return render_template('index.html')


#Connect forms to the database
#Get user info


@app.route('/teensignup', methods=['POST', 'GET'])
def signup():

    if request.method == 'POST':

        user = users(fName = request.form["firstName"],
        oName = request.form['OtherName'],
        email = request.form['Email'],
        phone = request.form['number'],
        gender = request.form['gender'],
        password = request.form['password'],
        Cpassword = request.form['password2'])

      #validate user registration
        userNumber = user.phone
        userPassword = user.Cpassword
        error = 'Number already registered! Use a different number to register'

        check_userNumber = users.query.filter(users.phone == userNumber).first()
        

        if check_userNumber != None :
            flash('Number already registered! Use a different number to register')
            return render_template('teensignup.html', error = error)

        else:
       
            try:
                db.session.add(user)
                db.session.commit()
                return render_template('teenlogin.html')

        
            except:
                return 'there was an error adding your information'

        
    else:
        return render_template('teensignup.html')

    

#validate and auth login information
@app.route('/teenlogin', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        user_id = request.form.get('userID')
        user_pw = request.form.get('LoginPassword')

    
        validate_info = users.query.filter(users.phone == user_id).first()
        validate_pw_info = users.query.filter(users.Cpassword == user_pw).first()
        login_error = 'Invalid user phone number or password!'
        
        if validate_info  != None  and validate_pw_info != None:
            return render_template('home.html')
        else:
            flash(login_error)
            return render_template('teenlogin.html', error = login_error)
    else:
        return render_template('teenlogin.html')

#main  features

@app.route('/home')
def homepage():
    return render_template('home.html')

@app.route('/logout')
def user_profile():
    return render_template('teenlogin.html')

@app.route('/about')
def About():
    return render_template('about.html')

@app.route('/share')
def Share():
    return render_template('share.html')

@app.route('/contacts')
def contact():
    dev_phone = " Phone number: +256704809826 / +256782607681"
    dev_mail = "Email: primu333@gmail.com " 
    
    flash(dev_phone + dev_mail)
    return render_template('home.html', details = dev_phone, mail = dev_mail)

@app.route('/new')
def New():
    return 'Currently there is nothing new on teenQuiz!'

@app.route('/trending')
def Trending():
    return 'Currently there is nothing trending on teenQuiz'

@app.route('/progress')
def Progress():
    return 'Current User progress can not be shown! \n teenQuiz sends apologies'

@app.route('/fresher')
def submit_fresher():
    fresher_message = 'You have submited your fresher answers, teenQuizz is checking answers.Meanwhile, answer next level'
    flash(fresher_message)
    return render_template('home.html', message = fresher_message)


@app.route('/intermediate')
def submit_intermediate():
    intermediate_message = fresher_message = 'You have submited your intermediate answers, teenQuizz is checking answers.Meanwhile, answer next level'
    flash(intermediate_meassage)
    return render_template('home.html', message = intermediate_message)


@app.route('/master')
def submit_master():
    master_message = fresher_message = 'You have submited your master answers, teenQuizz is checking answers.Meanwhile, answer next level'
    flash(master_message)
    return render_template('home.html', message = master_message)


@app.route('/challenge')
def submit_challenge():
    challenge_message = fresher_message = ' quizz submited!, teenQuizz is checking your submission. We will post your quizz in a short time'
    return render_template('home.html', message = challenge_message)




if __name__ == "__main__":
    app.run(debug=True)

