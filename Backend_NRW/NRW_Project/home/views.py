from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from home.models import Blog,Contact,Feedback
from home.serializers import BlogSerializer,ChatBotSerializer,ContactSerializer,FeedbackSerializer
# from home import main
import spacy
# from .serializers import ChatBotSerializer
nlp = spacy.load("en_core_web_sm")
knowledge_base = {
    "greeting": "Hello! How can I assist you with water management today?",
    "goodbye": "Goodbye! Have a great day.",
    "non_revenue_water_level": "Our current data indicates that the Non-Revenue Water level in our distribution network is [provide current level]. Non-Revenue Water includes water lost through leaks, theft, and inaccuracies in measurement. We are actively working to minimize these losses and improve overall efficiency.",
    "water_system_leaks": "Yes, we are aware of the importance of addressing leaks and losses in our water distribution system. Regular inspections and maintenance efforts are in place to identify and repair leaks promptly. If you notice any issues or have specific concerns, please report them to our customer service team.",
    "current_non_revenue_water_level": "The current level of Non-Revenue Water in our distribution network is [provide current level]. Regular monitoring and assessments help us track and manage water losses to ensure efficient water distribution.",
    "measure_water_losses": "Water losses in the distribution system are measured through a combination of technologies such as [mention specific technologies], regular inspections, and data analytics. Once identified, we take proactive measures to address these losses, including prompt repairs and system improvements.",
    "ongoing_initiatives": "Yes, we have ongoing initiatives to reduce water losses and enhance system efficiency. These efforts include [mention specific initiatives or projects]. We are committed to improving the sustainability of our water distribution system.",
    "report_water_leak_loss": "If you observe a water leak or loss in the distribution system, please report it to our customer service team immediately. You can contact us through [provide contact details] or use our online reporting tool on our website.",
    "water_conservation_resources": "Certainly! We recommend exploring resources on water conservation practices. You can find valuable information on [mention specific websites, guides, or educational materials]. Adopting water-saving habits contributes to a more sustainable water future.",
    "upcoming_projects": "Yes, we have upcoming projects and plans to enhance the water distribution system. These projects aim to [mention specific goals or improvements]. Stay tuned for updates on our website and official communications.",
    "water_quality_measures": "Ensuring water quality in the distribution network is a top priority. We implement measures such as [mention specific measures, treatments, or monitoring processes] to maintain high-quality water for our consumers.",
    "water_conservation_programs": "Yes, we offer programs and incentives for water conservation and efficient usage. These may include [mention specific programs, rebates, or incentives]. Our goal is to encourage responsible water consumption.",
    "internship_opportunities": "We provide internship opportunities for students interested in water management and distribution. Our internships cover areas such as [mention specific focus areas]. If you're interested, you can explore our internship opportunities on our website.",
    "inspection_frequency": "Our water distribution systems are regularly inspected for leaks and losses. Inspections are conducted [mention frequency, e.g., annually, quarterly] to identify and address any issues promptly.",
    "homeowner_tips": "For homeowners, here are some tips to identify and address water leaks on your property: [provide tips such as monitoring water bills for unusual increases, checking for visible leaks, inspecting faucets and pipes, etc.].",
    "detect_prevent_losses": "Various technologies are employed to detect and prevent water losses in the distribution network. These technologies include [mention specific technologies such as sensors, leak detection systems, etc.]. Our goal is to proactively address issues and maintain an efficient system.",
    "regulations_water_conservation": "Yes, there are government regulations and standards in place for water conservation in our region. These regulations cover areas such as [mention specific regulations and standards]. We adhere to these guidelines to promote responsible water use.",
    "check_water_usage": "To check your water usage and identify abnormal patterns, you can [provide information on how users can monitor their water usage, e.g., using online portals, smart meters, etc.]. Being aware of your water consumption helps in early detection of potential issues.",
    "smart_meters_role": "Smart meters play a crucial role in managing water distribution and reducing losses. These devices enable [mention specific functionalities, e.g., real-time monitoring, data analytics] that contribute to a more efficient and responsive water distribution system.",
    "environmental_impacts_losses": "The environmental impacts of water losses in the distribution system include [mention specific impacts, e.g., water scarcity, energy consumption, ecosystem disruption]. Minimizing these losses is essential for environmental sustainability.",
    "community_outreach_programs": "Yes, we have community outreach programs to raise awareness about water conservation. These programs involve [mention specific activities, e.g., workshops, educational campaigns, community events]. We believe in fostering a sense of responsibility toward our water resources.",
    "handle_water_theft": "The distribution system employs measures to handle water theft. These measures include [mention specific measures, e.g., monitoring for irregularities, legal actions]. Preventing water theft ensures fair distribution and sustainability.",
    "educational_resources": "Certainly! We recommend educational resources for learning more about water management and conservation. You can explore [mention specific resources, e.g., online courses, publications, documentaries] to deepen your understanding of these crucial topics.",
    "faq": "Hey, here are some frequently asked questions:\n1. What is Non-Revenue Water (NRW)?\n2. How is NRW calculated, and why is it important?\n3. How can water utilities save water and increase profitability?",
    "support": "Our support team is available 24/7. You can reach them at support@example.com or call +1-800-123-4567.",
    "access_course_materials": "To access your course materials, follow these steps:\n1. Log in to your student portal or learning management system (LMS).\n2. Navigate to the 'Courses' or 'My Courses' section.\n3. Select the course you're interested in.\n4. Look for a 'Course Materials' or 'Resources' tab.\n5. Here, you'll find links to lectures, assignments, readings, and other course materials.",
    "apply_for_subscription_scholarships": "To apply for subscriptions or scholarships, please follow these steps:\n1. Visit our website at [website URL].\n2. Navigate to the 'Scholarships' or 'Subscriptions' section.\n3. Find the application form for the scholarship or subscription you're interested in.\n4. Fill out the application form with the required information.\n5. Submit the application before the deadline.\nIf you have any specific questions or need further assistance with your application, feel free to contact our support team at support@example.com.",
    "register_for_course": "To register for a course, please follow these steps:\n1. Log in to your student portal or learning management system (LMS).\n2. Navigate to the 'Courses' or 'My Courses' section.\n3. Browse the available courses or search for the specific course you want to register for.\n4. Click on the course title or 'Register' Button.\n5. Follow the on-screen instructions to complete the registration process.\nIf you encounter any issues or need further assistance with course registration, feel free to contact our support team at support@example.com.",
    "recommend_study_groups": "Sure, I can recommend study groups and study materials for your course:\n1. For study materials, check your course's resources section on the student portal or learning management system (LMS). Professors often upload readings, slides, and other materials there.\n2. To find study groups, consider joining online forums or discussion boards related to your course. You can also ask your classmates or check with your professor for recommendations.\nRemember that effective study groups can help you grasp course material better and share insights with fellow students.",
    "job_search_resources": "We offer various resources to help you with job searching and resume building:\n1. Check our career services section on our website for job listings and career resources.\n2. Visit our resume-building workshops to create an impressive resume.\n3. Contact our career counselors for personalized assistance with job searching and career planning.",
    "exit": "Goodbye! If you have more questions, feel free to ask.",
    # Add more knowledge base entries for different intents
}

def recognize_intent(query):
    doc = nlp(query.lower())  # Tokenize and process the user's query
    intent = None

    # Define intent keywords or patterns
    greeting_keywords = ["hello", "hi", "hey"]
    goodbye_keywords = ["goodbye", "bye"]
    non_revenue_water_keywords = ["non-revenue water", "water losses", "distribution network"]
    water_system_leaks_keywords = ["leaks in water system", "water distribution system losses", "water system issues"]
    current_non_revenue_water_keywords = ["current level of non-revenue water", "non-revenue water level", "distribution network status"]
    measure_water_losses_keywords = ["measure water losses", "address water losses", "water distribution system management"]
    ongoing_initiatives_keywords = ["ongoing initiatives", "water efficiency projects", "reduce water losses"]
    report_water_leak_loss_keywords = ["report water leak", "report water loss", "water system issues reporting"]
    water_conservation_resources_keywords = ["water conservation resources", "water-saving practices", "sustainable water habits"]
    upcoming_projects_keywords = ["upcoming projects", "water distribution system improvements", "future plans"]
    water_quality_measures_keywords = ["water quality measures", "maintain water quality", "treatment processes"]
    water_conservation_programs_keywords = ["water conservation programs", "incentives for water conservation", "efficient water usage"]
    internship_opportunities_keywords = ["internship opportunities", "internship programs", "student internships"]
    inspection_frequency_keywords = ["inspection frequency", "water system inspections", "leak detection frequency"]
    homeowner_tips_keywords = ["homeowner tips", "identify water leaks", "address water leaks"]
    detect_prevent_losses_keywords = ["detect and prevent losses", "prevent water losses", "technologies for leak prevention"]
    regulations_water_conservation_keywords = ["government regulations water conservation",
                                               "standards for water conservation", "regulations for water use"]
    check_water_usage_keywords = ["check water usage", "identify abnormal water patterns", "monitor water consumption"]
    smart_meters_role_keywords = ["role of smart meters", "smart meters in water distribution",
                                  "smart meters reducing losses"]
    environmental_impacts_losses_keywords = ["environmental impacts of water losses",
                                             "ecological effects water distribution losses",
                                             "environmental consequences water waste"]
    community_outreach_programs_keywords = ["community outreach programs", "raise awareness water conservation",
                                            "community engagement water sustainability"]
    handle_water_theft_keywords = ["handle water theft", "prevent water theft", "measures against water theft"]
    educational_resources_keywords = ["educational resources water management", "learning water conservation",
                                      "resources for water education"]
    faq_keywords = ["faq", "frequently asked questions"]
    support_keywords = ["support", "help"]
    access_course_materials_keywords = ["access materials", "course materials", "how to access course materials",
                                        "get course materials"]
    apply_keywords = ["apply", "application"]
    subscription_keywords = ["subscription", "subscriptions"]
    scholarship_keywords = ["scholarship", "scholarships"]
    register_keywords = ["register", "registration", "enroll", "enrollment"]
    course_keywords = ["course", "courses"]
    recommend_study_groups_keywords = ["recommend study groups", "recommend study materials", "study help",
                                       "study groups"]
    job_search_keywords = ["job search", "job resources", "resume building", "career services"]
    exit_keywords = ["exit", "quit"]

    # Check for intent keywords
    if any(keyword in query for keyword in access_course_materials_keywords):
        intent = "access_course_materials"
    elif any(token.text in greeting_keywords for token in doc):
        intent = "greeting"
    elif any(token.text in goodbye_keywords for token in doc):
        intent = "goodbye"
    elif any(keyword in query for keyword in non_revenue_water_keywords):
        intent = "non_revenue_water_level"  # Recognize the new "non_revenue_water_level" intent
    elif any(keyword in query for keyword in water_system_leaks_keywords):
        intent = "water_system_leaks" # Recognize the new "water_system_leaks" intent
    elif any(keyword in query for keyword in current_non_revenue_water_keywords):
        intent = "current_non_revenue_water_level"  # Recognize the "current_non_revenue_water_level" intent
    elif any(keyword in query for keyword in measure_water_losses_keywords):
        intent = "measure_water_losses"  # Recognize the "measure_water_losses" intent
    elif any(keyword in query for keyword in ongoing_initiatives_keywords):
        intent = "ongoing_initiatives"  # Recognize the "ongoing_initiatives" intent
    elif any(keyword in query for keyword in report_water_leak_loss_keywords):
        intent = "report_water_leak_loss"  # Recognize the "report_water_leak_loss" intent
    elif any(keyword in query for keyword in water_conservation_resources_keywords):
        intent = "water_conservation_resources"  # Recognize the "water_conservation_resources" intent
    elif any(keyword in query for keyword in upcoming_projects_keywords):
        intent = "upcoming_projects"  # Recognize the "upcoming_projects" intent
    elif any(keyword in query for keyword in water_quality_measures_keywords):
        intent = "water_quality_measures"  # Recognize the "water_quality_measures" intent
    elif any(keyword in query for keyword in water_conservation_programs_keywords):
        intent = "water_conservation_programs"  # Recognize the "water_conservation_programs" intent
    elif any(keyword in query for keyword in internship_opportunities_keywords):
        intent = "internship_opportunities"  # Recognize the "internship_opportunities" intent
    elif any(keyword in query for keyword in inspection_frequency_keywords):
        intent = "inspection_frequency"  # Recognize the "inspection_frequency" intent
    elif any(keyword in query for keyword in homeowner_tips_keywords):
        intent = "homeowner_tips"  # Recognize the "homeowner_tips" intent
    elif any(keyword in query for keyword in detect_prevent_losses_keywords):
        intent = "detect_prevent_losses"  # Recognize the "detect_prevent_losses" intent
    elif any(keyword in query for keyword in regulations_water_conservation_keywords):
        intent = "regulations_water_conservation"  # Recognize the "regulations_water_conservation" intent
    elif any(keyword in query for keyword in check_water_usage_keywords):
        intent = "check_water_usage"  # Recognize the "check_water_usage" intent
    elif any(keyword in query for keyword in smart_meters_role_keywords):
        intent = "smart_meters_role"  # Recognize the "smart_meters_role" intent
    elif any(keyword in query for keyword in environmental_impacts_losses_keywords):
        intent = "environmental_impacts_losses"  # Recognize the "environmental_impacts_losses" intent
    elif any(keyword in query for keyword in community_outreach_programs_keywords):
        intent = "community_outreach_programs"  # Recognize the "community_outreach_programs" intent
    elif any(keyword in query for keyword in handle_water_theft_keywords):
        intent = "handle_water_theft"  # Recognize the "handle_water_theft" intent
    elif any(keyword in query for keyword in educational_resources_keywords):
        intent = "educational_resources"  # Recognize the "educational_resources" intents
    elif any(token.text in faq_keywords for token in doc):
        intent = "faq"
    elif any(token.text in support_keywords for token in doc):
        intent = "support"
    elif any(keyword in query for keyword in apply_keywords) and \
             (any(keyword in query for keyword in subscription_keywords) or any(
                 keyword in query for keyword in scholarship_keywords)):
        intent = "apply_for_subscription_scholarships"
    elif any(keyword in query for keyword in register_keywords) and any(
            keyword in query for keyword in course_keywords):
        intent = "register_for_course"
    elif any(keyword in query for keyword in recommend_study_groups_keywords):
        intent = "recommend_study_groups"
    elif any(keyword in query for keyword in job_search_keywords):
        intent = "job_search_resources"  # Recognize the new "job_search_resources" intent
    elif any(token.text in exit_keywords for token in doc):
        intent = "exit"
    # Add more intent checks for different intents

    return intent

    # Code for recognizing intents

def generate_response(intent):
    if intent is not None:
        if intent in knowledge_base:
            return knowledge_base[intent]
        else:
            return "I'm sorry, I don't have information on that question."
    else:
        return "I'm sorry, I don't understand that request."
    # Code for generating responses based on intents
class ChatBot(APIView):
    def post(self, request):
        serializer = ChatBotSerializer(data=request.data)
        if serializer.is_valid():
            user_input = serializer.validated_data.get('message', '')
            intent = recognize_intent(user_input)
            response = generate_response(intent)

            return Response({'response': response}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlogList(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

# def chatbot(request):

class ContactCreateView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    # permission_classes = [permissions.IsAuthenticated]

class FeedbackCreateView(generics.ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    # permission_classes = [permissions.IsAuthenticated]