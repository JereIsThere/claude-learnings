"""SandboxedEnvironment — wenn du *wirklich* User-Templates ausführen musst.

Use-Case: ein User darf eigene E-Mail-Vorlagen mit Platzhaltern wie
`{{ user.name }}` definieren. Du willst NICHT, dass er beliebigen
Python-Code ausführt.

Start:
    pip install Jinja2
    python sandbox_demo.py
"""
from jinja2 import Environment
from jinja2.sandbox import SandboxedEnvironment
from jinja2.exceptions import SecurityError


USER_TEMPLATE_SAFE = "Hallo {{ user.name }}, dein Bonus: {{ bonus }} €"

# Klassische SSTI-Probe-Kette: über __class__ -> __mro__ -> __subclasses__()
# kommen Angreifer normalerweise an z. B. os.system. Die Sandbox blockiert
# Zugriff auf solche "unsafe attributes".
USER_TEMPLATE_EVIL = "{{ ''.__class__.__mro__[1].__subclasses__() }}"


context = {
    "user": {"name": "Alice"},
    "bonus": 50,
}


def demo(env_label, env, template_src):
    print(f"\n--- {env_label} ---")
    print(f"Template: {template_src!r}")
    try:
        result = env.from_string(template_src).render(**context)
        # Output abkürzen damit's nicht den Terminal flutet
        snippet = result if len(result) < 120 else result[:120] + "...(abgeschnitten)"
        print(f"Render:   {snippet}")
    except SecurityError as e:
        print(f"BLOCKIERT (SecurityError): {e}")
    except Exception as e:
        print(f"Fehler ({type(e).__name__}): {e}")


if __name__ == "__main__":
    plain = Environment()
    sandbox = SandboxedEnvironment()

    print("=== Harmloses Template ===")
    demo("Plain Environment", plain, USER_TEMPLATE_SAFE)
    demo("SandboxedEnvironment", sandbox, USER_TEMPLATE_SAFE)

    print("\n=== Bösartiges Template ===")
    demo("Plain Environment", plain, USER_TEMPLATE_EVIL)
    demo("SandboxedEnvironment", sandbox, USER_TEMPLATE_EVIL)

    print("\nFazit:")
    print("- Die Sandbox blockiert den Zugriff auf __class__/__mro__/__subclasses__.")
    print("- Sie ist Defense-in-Depth, KEIN Freibrief für beliebige User-Templates.")
    print("- Begrenze zusätzlich: kurze Templates, kurze Render-Zeiten,")
    print("  keine sensiblen Variablen im Kontext.")
